import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'placa'
})
export class PLACAPipe implements PipeTransform {
  transform(placaValue: any) {
    return maskBr.placa(placaValue);
  }
}
