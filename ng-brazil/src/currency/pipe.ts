import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'currencyBrazil',
})
export class CURRENCYPipe implements PipeTransform {
  transform(currencyValue: any, decimalValue: any) {
    return maskBr.currency(currencyValue, decimalValue);
  }
}
