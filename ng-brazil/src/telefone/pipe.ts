import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
    transform(telefoneValue: any) {
        return maskBr.telefone(telefoneValue);
    }
}
