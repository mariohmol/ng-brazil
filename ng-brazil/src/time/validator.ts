import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_time } from '../core/utils';

export const time: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_time(v) ? null : {time: true};
}
