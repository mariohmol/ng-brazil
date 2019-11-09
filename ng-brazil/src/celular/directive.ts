import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { celular } from './validator';

const CELULAR_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => CelularValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[celular][formControlName],[celular][formControl],[celular][ngModel]',
  providers: [CELULAR_VALIDATOR]
})
export class CelularValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return celular(c);
  }
}
