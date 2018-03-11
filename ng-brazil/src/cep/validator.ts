import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, valida_cep } from '../core/utils';

export const cep: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return valida_cep(v) ? null : {cep: true};
}
