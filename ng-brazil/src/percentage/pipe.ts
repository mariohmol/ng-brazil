import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'percentage',
})
export class PERCENTAGEPipe implements PipeTransform {
  transform(percentageValue: any, decimalValue: any) {
    return maskBr.porcentagem(percentageValue, decimalValue);
  }
}
