import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cnpj, MASKS } from '../core/utils';

@Pipe({
    name: 'cnpj',
})
export class CNPJPipe implements PipeTransform {
    transform(cnpjValue: any) {
        if (!cnpjValue) {
            return '';
        }

        return conformToMask(
            cnpjValue,
            MASKS.cnpj.textMask,
            { guide: false }
        ).conformedValue;
    }
}
