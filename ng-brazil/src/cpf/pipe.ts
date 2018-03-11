import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
    name: 'cpf',
})
export class CPFPipe implements PipeTransform {
    transform(cpfValue: any) {
        if (!cpfValue) {
            return '';
        }

        return conformToMask(
            cpfValue,
            MASKS.cpf.textMask,
            { guide: false }
        ).conformedValue;
    }
}
