import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'currency',
})
export class CURRENCYPipe implements PipeTransform {
  transform(currencyValue: any) {
    return maskBr.currency(currencyValue);
  }
}
