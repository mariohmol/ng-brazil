import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
  name: 'titulo'
})
export class TITULOPipe implements PipeTransform {
  transform(tituloValue: any) {
    return maskBr.titulo(tituloValue);
  }
}
