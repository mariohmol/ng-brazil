import { AbstractControl, Validators, ValidatorFn, RequiredValidator } from '@angular/forms';

import { isPresent, validate_placa } from '../core/utils';

export const placa: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    if (isPresent(Validators.required(control))) {
        return null;
    }

    const v: string = control.value;
    return validate_placa(v) ? null : {placa: true};
}
