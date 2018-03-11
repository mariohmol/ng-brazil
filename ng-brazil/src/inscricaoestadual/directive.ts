import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { inscricaoestadual } from './validator';


const INSCRICAOESTADUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => InscricaoEstadualValidator),
  multi: true
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inscricaoestadual][formControlName],[inscricaoestadual][formControl],[inscricaoestadual][ngModel]',
  providers: [INSCRICAOESTADUAL_VALIDATOR]
})
export class InscricaoEstadualValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return inscricaoestadual('mg')(c);
  }
}
