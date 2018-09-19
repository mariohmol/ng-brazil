import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'cpf',
})
export class CPFPipe implements PipeTransform {
    transform(cpfValue: any) {
      return maskBr.cpf(cpfValue);
    }
}
