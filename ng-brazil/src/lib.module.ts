import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

import { cpf } from './cpf/validator';
import { CPFValidator } from './cpf/directive';
import { CPFPipe } from './cpf/pipe';

import { cnpj } from './cnpj/validator';
import { CNPJValidator } from './cnpj/directive';

import { telefone } from './telefone/validator';
import { TelefoneValidator } from './telefone/directive';

import { inscricaoestadual } from './inscricaoestadual/validator';
import { InscricaoEstadualValidator } from './inscricaoestadual/directive';
import { CNPJPipe } from './cnpj/pipe';
import { InscricaoEstadualPipe } from './inscricaoestadual/pipe';
import { TelefonePipe } from './telefone/pipe';

export const NgBrazilValidators: any = {
  cpf,
  cnpj,
  telefone,
  inscricaoestadual
}

const CustomDirectives = [
  CPFValidator,
  CPFPipe,
  CNPJValidator,
  CNPJPipe,
  InscricaoEstadualValidator,
  InscricaoEstadualPipe,
  TelefoneValidator,
  TelefonePipe
];

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [
    CustomDirectives
  ],
  exports: [
    CustomDirectives
  ]
})
export class NgBrasil {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBrasil
    };
  }
}
