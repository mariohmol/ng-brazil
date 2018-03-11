import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
    name: 'cep',
})
export class CEPPipe implements PipeTransform {
    transform(cepValue: any) {
        if (!cepValue) {
            return '';
        }

        return conformToMask(
            cepValue,
            MASKS.cep.textMask,
            { guide: false }
        ).conformedValue;
    }
}
