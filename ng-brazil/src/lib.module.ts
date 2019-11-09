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

import { celular } from './celular/validator';
import { CelularValidator } from './celular/directive';
import { CelularPipe } from './celular/pipe';

import { inscricaoestadual } from './inscricaoestadual/validator';
import { InscricaoEstadualValidator } from './inscricaoestadual/directive';
import { InscricaoEstadualPipe } from './inscricaoestadual/pipe';

import { CEPValidator } from './cep/directive';
import { CEPPipe } from './cep/pipe';
import { cep } from './cep/validator';


import { currency } from './currency/validator';
import { CURRENCYValidator } from './currency/directive';
import { CURRENCYPipe } from './currency/pipe';

import { number } from './number/validator';
import { NUMBERValidator } from './number/directive';
import { NUMBERPipe } from './number/pipe';



import { placa } from './placa/validator';
import { PLACAValidator } from './placa/directive';
import { PLACAPipe } from './placa/pipe';

import { percentage } from './percentage/validator';
import { PERCENTAGEValidator } from './percentage/directive';
import { PERCENTAGEPipe } from './percentage/pipe';

import { renavam } from './renavam/validator';
import { RenavamValidator } from './renavam/directive';
import { RenavamPipe } from './renavam/pipe';

import { pispasep } from './pispasep/validator';
import { PispasepValidator } from './pispasep/directive';
import { PispasepPipe } from './pispasep/pipe';

import { rg } from './rg/validator';
import { RGValidator } from './rg/directive';
import { RGPipe } from './rg/pipe';

import { time } from './time/validator';
import { TIMEValidator } from './time/directive';
import { TIMEPipe } from './time/pipe';

import { titulo } from './titulo/validator';
import { TITULOValidator } from './titulo/directive';
import { TITULOPipe } from './titulo/pipe';
import { utilsBr } from 'js-brasil';



export const NgBrazilValidators: any = {
  cpf,
  cnpj,
  celular,
  cep,
  currency,
  inscricaoestadual,
  number,
  pispasep,
  placa,
  percentage,
  renavam,
  rg,
  telefone,
  time,
  titulo
}

export const MASKS = utilsBr.MASKS;
export const CustomDirectives = [
  CelularValidator,
  CelularPipe,
  CEPValidator,
  CEPPipe,
  CPFValidator,
  CPFPipe,
  CNPJValidator,
  CNPJPipe,
  CURRENCYValidator,
  CURRENCYPipe,
  InscricaoEstadualValidator,
  InscricaoEstadualPipe,
  NUMBERValidator,
  NUMBERPipe,
  PERCENTAGEValidator,
  PERCENTAGEPipe,
  PispasepValidator,
  PispasepPipe,
  PLACAValidator,
  PLACAPipe,
  RenavamValidator,
  RenavamPipe,
  RGValidator,
  RGPipe,
  TelefoneValidator,
  TelefonePipe,
  TIMEValidator,
  TIMEPipe,
  TITULOValidator,
  TITULOPipe
];

export const NgBrDirectives = {
  CelularValidator,
  CelularPipe,
  CEPValidator,
  CEPPipe,
  CNPJValidator,
  CNPJPipe,
  CPFValidator,
  CPFPipe,
  CURRENCYValidator,
  CURRENCYPipe,
  InscricaoEstadualValidator,
  InscricaoEstadualPipe,
  NUMBERValidator,
  NUMBERPipe,
  PERCENTAGEValidator,
  PERCENTAGEPipe,
  PispasepValidator,
  PispasepPipe,
  PLACAValidator,
  PLACAPipe,
  RGValidator,
  RGPipe,
  RenavamValidator,
  RenavamPipe,
  TelefoneValidator,
  TelefonePipe,
  TIMEValidator,
  TIMEPipe,
  TITULOValidator,
  TITULOPipe
};

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
