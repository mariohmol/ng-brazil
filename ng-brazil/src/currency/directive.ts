import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { currency } from './validator';

const CURRENCY_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CURRENCYValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[currency][formControlName],[currency][formControl],[currency][ngModel]',
  providers: [CURRENCY_VALIDATOR]
})
export class CURRENCYValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return currency(c);
  }
}
