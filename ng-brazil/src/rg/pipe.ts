import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'rg',
})
export class RGPipe implements PipeTransform {
    transform(rgValue: any) {
      return maskBr.rg(rgValue);
    }
}
