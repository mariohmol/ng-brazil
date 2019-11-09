import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'renavam',
})
export class RenavamPipe implements PipeTransform {
    transform(renavamValue: any) {
        return maskBr.renavam(renavamValue);
    }
}
