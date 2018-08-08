import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_titulo, MASKS } from '../core/utils';

@Pipe({
    name: 'titulo'
})
export class TITULOPipe implements PipeTransform {
    transform(tituloValue: any) {
        if (!tituloValue) {
            return '';
        }

        return conformToMask(
            tituloValue,
            MASKS.titulo.textMask,
            { guide: false }
        ).conformedValue
    }
}
