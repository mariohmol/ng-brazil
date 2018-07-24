import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_placa, MASKS } from '../core/utils';

@Pipe({
    name: 'placa'
})
export class PLACAPipe implements PipeTransform {
    transform(placaValue: any) {
        if (!placaValue) {
            return '';
        }

        return conformToMask(
            placaValue,
            MASKS.placa.textMask,
            { guide: false }
        ).conformedValue
    }
}
