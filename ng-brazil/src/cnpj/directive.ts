import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { cnpj } from './validator';


const CNPJ_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => CNPJValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cnpj][formControlName],[cnpj][formControl],[cnpj][ngModel]',
  providers: [CNPJ_VALIDATOR]
})
export class CNPJValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return cnpj(c);
  }
}
