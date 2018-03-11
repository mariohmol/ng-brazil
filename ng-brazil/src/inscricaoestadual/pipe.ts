import { Pipe, PipeTransform } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
    name: 'inscricaoestadual',
})
export class InscricaoEstadualPipe implements PipeTransform {
    transform(inscricaoestadualValue: any, estado: any) {
        if (!inscricaoestadualValue || !estado || !MASKS.inscricaoestadual[estado] || !MASKS.inscricaoestadual[estado].textMask) {
            return '';
        }

        return conformToMask(
            inscricaoestadualValue,
            MASKS.inscricaoestadual[estado].textMask,
            { guide: false }
        ).conformedValue;
    }
}
