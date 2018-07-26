import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
    name: 'time',
})
export class TIMEPipe implements PipeTransform {
    transform(timeValue: any) {
        if (!timeValue) {
            return '';
        }

        return conformToMask(
            timeValue,
            MASKS.time.textMask,
            { guide: false }
        ).conformedValue;
    }
}
