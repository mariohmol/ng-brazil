import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { porcentagem } from './validator';

const PERCENTAGE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => PERCENTAGEValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[percentage][formControlName],[percentage][formControl],[percentage][ngModel]',
  providers: [PERCENTAGE_VALIDATOR]
})
export class PERCENTAGEValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return porcentagem(c);
  }
}
