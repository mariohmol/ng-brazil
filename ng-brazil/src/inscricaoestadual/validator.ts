import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { isPresent } from '../core/utils';
import { validar } from '../core/inscricaoestadual';

export const inscricaoestadual = (estado: string):
  ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } => {
      if (isPresent(Validators.required(control))) {
        return null;
      }
      const v: string = control.value;
      return validar(v, estado) ? null : { inscricaoestadual: true };
    };
}
