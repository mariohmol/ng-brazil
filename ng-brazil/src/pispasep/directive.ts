import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { pispasep } from './validator';

const PISPASE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => PispasepValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pispasep][formControlName],[pispasep][formControl],[pispasep][ngModel]',
  providers: [PISPASE_VALIDATOR]
})
export class PispasepValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return pispasep(c);
  }
}
