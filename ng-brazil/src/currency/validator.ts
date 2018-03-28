import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_currency } from '../core/utils';

export const currency: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_currency(v) ? null : { currency: true };
}
