import { Pipe, PipeTransform } from '@angular/core';
import textMask, { conformToMask } from 'text-mask';
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
        );
    }
}
