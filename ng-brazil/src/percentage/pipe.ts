import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
  name: 'percentage',
})
export class PERCENTAGEPipe implements PipeTransform {
  transform(percentageValue: any) {
    if (!percentageValue) {
      return '';
    }
    const vals = percentageValue.split(',');
    const mask = MASKS.percentage.textMask(vals[0]);

    return conformToMask(
      percentageValue,
      mask,
      { guide: false }
    ).conformedValue + ',' + vals[1];
  }
}
