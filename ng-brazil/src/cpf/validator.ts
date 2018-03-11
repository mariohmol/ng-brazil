import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_cpf } from '../core/utils';

export const cpf: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_cpf(v) ? null : {cpf: true};
}
