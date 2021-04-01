import {
  Directive, ElementRef, forwardRef, Input, Inject, NgModule,
  OnChanges, Optional, Provider, SimpleChanges, Injectable, RendererFactory2
} from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor, COMPOSITION_BUFFER_MODE } from '@angular/forms'
import { ɵgetDOM as getDOM, BrowserModule } from '@angular/platform-browser'

import * as textMask from 'text-mask-core'
export const conformToMask=textMask.conformToMask;
const { createTextMaskInputElement } = textMask;
export class TextMaskConfig {
  mask: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false
  guide?: boolean
  placeholderChar?: string
  pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | object
  keepCharPositions?: boolean
  showMask?: boolean
}

export const MASKEDINPUT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable: no-use-before-declare */
  useExisting: forwardRef(() => MaskedInputDirective),
  multi: true
}

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid(): boolean {
  const userAgent = getDOM() ? getDOM().getUserAgent() : ''
  return /android (\d+)/.test(userAgent.toLowerCase())
}

@Injectable()
@Directive({
  host: {
    '(input)': '_handleInput($event.target.value)',
    '(blur)': 'onTouched()',
    '(compositionstart)': '_compositionStart()',
    '(compositionend)': '_compositionEnd($event.target.value)'
  },
  /* tslint:disable: directive-selector */
  selector: '[textMask]',
  exportAs: 'textMask',
  providers: [MASKEDINPUT_VALUE_ACCESSOR]
})
export class MaskedInputDirective implements ControlValueAccessor, OnChanges {
  @Input('textMask') textMaskConfig: TextMaskConfig = {
    mask: [],
    guide: true,
    placeholderChar: '_',
    pipe: undefined,
    keepCharPositions: false,
  }

  private textMaskInputElement: any
  private inputElement: HTMLInputElement
  private _renderer: any;
  /** Whether the user is creating a composition string (IME events). */
  private _composing = false

  constructor(
    rendererFactory: RendererFactory2,
    private _elementRef: ElementRef,
    @Optional() @Inject(COMPOSITION_BUFFER_MODE) private _compositionMode: boolean
  ) {
    this._renderer = rendererFactory.createRenderer(null, null);
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid()
    }
  }

  onChange = (_: any) => { }
  onTouched = () => { }

  ngOnChanges(changes: SimpleChanges) {
    this._setupMask(true)
    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(this.inputElement.value)
    }
  }

  writeValue(value: any) {
    this._setupMask()

    // set the initial value for cases where the mask is disabled
    const normalizedValue = value == null ? '' : value
    this._renderer.setProperty(this.inputElement, 'value', normalizedValue)

    if (this.textMaskInputElement !== undefined) {
      this.textMaskInputElement.update(value)
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn }
  registerOnTouched(fn: () => void): void { this.onTouched = fn }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled)
  }


  _handleInput(value) {
    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
      this._setupMask()

      if (this.textMaskInputElement !== undefined) {
        this.textMaskInputElement.update(value)

        // get the updated value
        value = this.inputElement.value
        this.onChange(value)
      }
    }
  }

  _setupMask(create = false) {
    if (!this.inputElement) {
      if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
        // `textMask` directive is used directly on an input element
        this.inputElement = this._elementRef.nativeElement
      } else {
        // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
        this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0]
      }
    }

    if (this.inputElement && create) {
      this.textMaskInputElement = createTextMaskInputElement(
        Object.assign({ inputElement: this.inputElement }, this.textMaskConfig)
      )
    }

  }

  _compositionStart(): void { this._composing = true }

  _compositionEnd(value: any): void {
    this._composing = false
    if (this._compositionMode) {
      this._handleInput(value)
    }
  }
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [MaskedInputDirective],
  exports: [MaskedInputDirective]
})
export class TextMaskModule { }
