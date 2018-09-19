import { AbstractControl, Validators, ValidatorFn, RequiredValidator } from '@angular/forms';
import { utilsBr, validateBr } from 'js-brasil';

export const placa: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    if (utilsBr.isPresent(Validators.required(control))) {
        return null;
    }

    const v: string = control.value;
    return validateBr.placa(v) ? null : {placa: true};
}
