import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { utilsBr, validateBr } from 'js-brasil';

export const renavam: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
  if (utilsBr.isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validateBr.renavam(v) ? null : { renavam: true };
}
