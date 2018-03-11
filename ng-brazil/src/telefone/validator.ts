import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_telefone } from '../core/utils';

export const telefone: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_telefone(v) ? null : { telefone: true };
}
