import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import * as ie from 'inscricaoestadual';
import { isPresent } from '../core/utils';

export const inscricaoestadual = (estado: string):
  ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } => {
      if (isPresent(Validators.required(control))) {
        return null;
      }

      const v: string = control.value;
      return ie(v, estado) ? null : { inscricaoestadual: true };
    };
}
