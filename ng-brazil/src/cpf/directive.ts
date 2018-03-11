import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { cpf } from './validator';

const CPF_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CPFValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cpf][formControlName],[cpf][formControl],[cpf][ngModel]',
  providers: [CPF_VALIDATOR]
})
export class CPFValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return cpf(c);
  }
}
