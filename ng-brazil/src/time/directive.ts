import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { time } from './validator';

const TIME_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => TIMEValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[time][formControlName],[time][formControl],[time][ngModel]',
  providers: [TIME_VALIDATOR]
})
export class TIMEValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return time(c);
  }
}
