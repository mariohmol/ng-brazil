import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_cnpj } from '../core/utils';

export const cnpj: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_cnpj(v) ? null : {cnpj: true};
}
