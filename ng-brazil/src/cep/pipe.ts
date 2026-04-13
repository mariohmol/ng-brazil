import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({ standalone: false,
    name: 'cep',
})
export class CEPPipe implements PipeTransform {
    transform(cepValue: any) {
        return maskBr.cep(cepValue);
    }
}
