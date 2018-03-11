import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { telefone } from './validator';

const TELEFONE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TelefoneValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[telefone][formControlName],[telefone][formControl],[telefone][ngModel]',
  providers: [TELEFONE_VALIDATOR]
})
export class TelefoneValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return telefone(c);
  }
}
