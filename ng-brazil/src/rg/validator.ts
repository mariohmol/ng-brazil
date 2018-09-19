import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { utilsBr, validateBr } from 'js-brasil';

export const rg: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (utilsBr.isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  return validateBr.rg(v) ? null : {rg: true};
}
