import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { MASKS } from '../core/utils';

@Pipe({
    name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
    transform(telefoneValue: any) {
        if (!telefoneValue) {
            return '';
        }

        return conformToMask(
            telefoneValue,
            MASKS.telefone.textMask,
            { guide: false }
        ).conformedValue;
    }
}
