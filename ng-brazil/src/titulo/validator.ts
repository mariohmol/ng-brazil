import { AbstractControl, Validators, ValidatorFn, RequiredValidator } from '@angular/forms';
import { utilsBr, validateBr } from 'js-brasil';

export const titulo: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    if (utilsBr.isPresent(Validators.required(control))) {
        return null;
    }

    const v: string = control.value;
    return validateBr.titulo(v) ? null : {titulo: true};
}
