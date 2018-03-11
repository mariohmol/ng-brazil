import { Pipe, PipeTransform } from '@angular/core';
import textMask, { conformToMask } from 'text-mask';
import { validate_cpf, MASKS } from '../core/utils';

@Pipe({
    name: 'inscricaoestadual',
})
export class InscricaoEstadualPipe implements PipeTransform {
    transform(inscricaoestadualValue: any, estado: any) {
        if (!inscricaoestadualValue) {
            return '';
        }

        return conformToMask(
            inscricaoestadualValue,
            MASKS.inscricaoestadual[estado].textMask,
            { guide: false }
        );
    }
}
