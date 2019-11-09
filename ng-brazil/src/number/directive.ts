import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { number } from './validator';

const NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => NUMBERValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[number][formControlName],[number][formControl],[number][ngModel]',
  providers: [NUMBER_VALIDATOR]
})
export class NUMBERValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return number(c);
  }
}
