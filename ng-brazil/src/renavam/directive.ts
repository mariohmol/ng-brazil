import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { renavam } from './validator';

const RENAVAM_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => RenavamValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[renavam][formControlName],[renavam][formControl],[renavam][ngModel]',
  providers: [RENAVAM_VALIDATOR]
})
export class RenavamValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return renavam(c);
  }
}
