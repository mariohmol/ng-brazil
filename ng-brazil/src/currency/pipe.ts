import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
  name: 'currency',
})
export class CURRENCYPipe implements PipeTransform {
  transform(currencyValue: any) {
    if (!currencyValue) {
      return '';
    }
    const vals = currencyValue.split(',');
    const mask = MASKS.currency.textMask(vals[0]);

    return conformToMask(
      currencyValue,
      mask,
      { guide: false }
    ).conformedValue + ',' + vals[1];
  }
}
