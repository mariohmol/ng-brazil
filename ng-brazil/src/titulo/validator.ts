import { AbstractControl, Validators, ValidatorFn, RequiredValidator } from '@angular/forms';

import { isPresent, validate_titulo } from '../core/utils';

export const titulo: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
    if (isPresent(Validators.required(control))) {
        return null;
    }

    const v: string = control.value;
    return validate_titulo(v) ? null : {titulo: true};
}
