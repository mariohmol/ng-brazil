import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, validate_percentage } from '../core/utils';

export const percentage: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validate_percentage(v) ? null : { percentage: true };
}
