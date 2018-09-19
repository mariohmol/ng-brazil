import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { cpf } from './cpf/validator';
import { CPFValidator } from './cpf/directive';
import { CPFPipe } from './cpf/pipe';

import { cnpj } from './cnpj/validator';
import { CNPJValidator } from './cnpj/directive';
import { CNPJPipe } from './cnpj/pipe';

import { telefone } from './telefone/validator';
import { TelefoneValidator } from './telefone/directive';
import { TelefonePipe } from './telefone/pipe';

import { inscricaoestadual } from './inscricaoestadual/validator';
import { InscricaoEstadualValidator } from './inscricaoestadual/directive';
import { InscricaoEstadualPipe } from './inscricaoestadual/pipe';

import { CEPValidator } from './cep/directive';
import { CEPPipe } from './cep/pipe';
import { cep } from './cep/validator';

import { rg } from './rg/validator';
import { RGValidator } from './rg/directive';
import { RGPipe } from './rg/pipe';

import { currency } from './currency/validator';
import { CURRENCYValidator } from './currency/directive';
import { CURRENCYPipe } from './currency/pipe';

import { percentage } from './percentage/validator';
import { PERCENTAGEValidator } from './percentage/directive';
import { PERCENTAGEPipe } from './percentage/pipe';

import { time } from './time/validator';
import { TIMEValidator } from './time/directive';
import { TIMEPipe } from './time/pipe';

import { placa } from './placa/validator';
import { PLACAValidator } from './placa/directive';
import { PLACAPipe } from './placa/pipe';

import { titulo } from './titulo/validator';
import { TITULOValidator } from './titulo/directive';
import { TITULOPipe } from './titulo/pipe';

export const NgBrazilValidators: any = {
  cpf,
  cnpj,
  rg,
  telefone,
  inscricaoestadual,
  cep,
  currency,
  percentage,
  time,
  placa,
  titulo
}

const CustomDirectives = [
  CPFValidator,
  CPFPipe,
  CNPJValidator,
  CNPJPipe,
  RGValidator,
  RGPipe,
  InscricaoEstadualValidator,
  InscricaoEstadualPipe,
  TelefoneValidator,
  TelefonePipe,
  CEPValidator,
  CEPPipe,
  CURRENCYValidator,
  CURRENCYPipe,
  PERCENTAGEValidator,
  PERCENTAGEPipe,
  TIMEValidator,
  TIMEPipe,
  PLACAValidator,
  PLACAPipe,
  TITULOValidator,
  TITULOPipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomDirectives
  ],
  exports: [
    CustomDirectives
  ]
})
class NgBrazil {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgBrazil
    };
  }
}
export {
  NgBrazil
}
