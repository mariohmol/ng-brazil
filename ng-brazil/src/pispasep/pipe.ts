import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'pispasep',
})
export class PispasepPipe implements PipeTransform {
    transform(pispasepValue: any) {
        return maskBr.pispasep(pispasepValue);
    }
}
