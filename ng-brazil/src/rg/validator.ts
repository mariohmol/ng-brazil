import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_rg } from '../core/utils';

export const rg: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_rg(v) ? null : {rg: true};
}
