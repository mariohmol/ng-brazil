import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({ standalone: false,
    name: 'time',
})
export class TIMEPipe implements PipeTransform {
    transform(timeValue: any) {
        return maskBr.time(timeValue);
    }
}
