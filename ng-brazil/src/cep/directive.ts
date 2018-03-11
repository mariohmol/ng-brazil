import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { cep } from './validator';

const CEP_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CEPValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cep][formControlName],[cep][formControl],[cep][ngModel]',
  providers: [CEP_VALIDATOR]
})
export class CEPValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return cep(c);
  }
}
