import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({ standalone: false,
  name: 'currencyBrazil',
})
export class CURRENCYPipe implements PipeTransform {
  transform(currencyValue: any, decimalValue: any) {
    return maskBr.currency(currencyValue, decimalValue);
  }
}
