import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_rg, MASKS } from '../core/utils';

@Pipe({
    name: 'rg',
})
export class RGPipe implements PipeTransform {
    transform(rgValue: any) {
        if (!rgValue) {
            return '';
        }

        return conformToMask(
            rgValue,
            MASKS.rg.textMask,
            { guide: false }
        ).conformedValue;
    }
}
