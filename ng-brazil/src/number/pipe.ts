import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'numberBrazil',
})
export class NUMBERPipe implements PipeTransform {
  transform(numberValue: any, decimalValue: any) {
    return maskBr.number(numberValue, decimalValue);
  }
}
