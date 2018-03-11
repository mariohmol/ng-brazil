import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validaTelefone } from '../core/utils';

export const telefone: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validaTelefone(v) ? null : { telefone: true };
}
