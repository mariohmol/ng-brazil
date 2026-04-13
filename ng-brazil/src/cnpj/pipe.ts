import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({ standalone: false,
    name: 'cnpj',
})
export class CNPJPipe implements PipeTransform {
    transform(cnpjValue: any) {
      return maskBr.cnpj(cnpjValue);
    }
}
