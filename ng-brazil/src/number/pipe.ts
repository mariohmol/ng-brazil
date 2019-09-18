import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'numberBrazil',
})
export class NUMBERPipe implements PipeTransform {
  transform(numberValue: any) {
    return maskBr.number(numberValue);
  }
}
