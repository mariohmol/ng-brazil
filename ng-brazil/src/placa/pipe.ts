import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({ standalone: false,
  name: 'placa'
})
export class PLACAPipe implements PipeTransform {
  transform(placaValue: any) {
    return maskBr.placa(placaValue);
  }
}
