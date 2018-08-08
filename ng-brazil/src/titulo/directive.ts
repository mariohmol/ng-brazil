import { Directive, forwardRef} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { titulo } from './validator';

const TITULO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => TITULOValidator),
    multi: true
};

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[titulo][formControlName],[titulo][formControl],[titulo][ngModel]',
    providers: [TITULO_VALIDATOR]
})
export class TITULOValidator implements Validator {
    validate(c: AbstractControl): {[key: string]: any} {
        return titulo(c);
    }
}
