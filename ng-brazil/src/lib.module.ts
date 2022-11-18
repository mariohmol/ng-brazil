import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { cpf } from './cpf/validator';
import { CPFValidator } from './cpf/directive';
import { CPFPipe } from './cpf/pipe';

export * from './cpf/validator';
export * from './cpf/directive';
export * from './cpf/pipe';

import { cnpj } from './cnpj/validator';
import { CNPJValidator } from './cnpj/directive';
import { CNPJPipe } from './cnpj/pipe';

export * from './cnpj/validator';
export * from './cnpj/directive';
export * from './cnpj/pipe';

import { telefone } from './telefone/validator';
import { TelefoneValidator } from './telefone/directive';
import { TelefonePipe } from './telefone/pipe';

export * from './telefone/validator';
export * from './telefone/directive';
export * from './telefone/pipe';

import { celular } from './celular/validator';
import { CelularValidator } from './celular/directive';
import { CelularPipe } from './celular/pipe';

export * from './celular/validator';
export * from './celular/directive';
export * from './celular/pipe';

import { inscricaoestadual } from './inscricaoestadual/validator';
import { InscricaoEstadualValidator } from './inscricaoestadual/directive';
import { InscricaoEstadualPipe } from './inscricaoestadual/pipe';

export * from './inscricaoestadual/validator';
export * from './inscricaoestadual/directive';
export * from './inscricaoestadual/pipe';

import { CEPValidator } from './cep/directive';
import { CEPPipe } from './cep/pipe';
import { cep } from './cep/validator';

export * from './cep/directive';
export * from './cep/pipe';
export * from './cep/validator';

import { currency } from './currency/validator';
import { CURRENCYValidator } from './currency/directive';
import { CURRENCYPipe } from './currency/pipe';

export * from './currency/validator';
export * from './currency/directive';
export * from './currency/pipe';

import { number } from './number/validator';
import { NUMBERValidator } from './number/directive';
import { NUMBERPipe } from './number/pipe';


export * from './number/validator';
export * from './number/directive';
export * from './number/pipe';

import { placa } from './placa/validator';
import { PLACAValidator } from './placa/directive';
import { PLACAPipe } from './placa/pipe';

export * from './placa/validator';
export * from './placa/directive';
export * from './placa/pipe';

import { percentage } from './percentage/validator';
import { PERCENTAGEValidator } from './percentage/directive';
import { PERCENTAGEPipe } from './percentage/pipe';

export * from './percentage/validator';
export * from './percentage/directive';
export * from './percentage/pipe';

import { renavam } from './renavam/validator';
import { RenavamValidator } from './renavam/directive';
import { RenavamPipe } from './renavam/pipe';

export * from './renavam/validator';
export * from './renavam/directive';
export * from './renavam/pipe';

import { pispasep } from './pispasep/validator';
import { PispasepValidator } from './pispasep/directive';
import { PispasepPipe } from './pispasep/pipe';

export * from './pispasep/validator';
export * from './pispasep/directive';
export * from './pispasep/pipe';

import { rg } from './rg/validator';
import { RGValidator } from './rg/directive';
import { RGPipe } from './rg/pipe';

export * from './rg/validator';
export * from './rg/directive';
export * from './rg/pipe';

import { time } from './time/validator';
import { TIMEValidator } from './time/directive';
import { TIMEPipe } from './time/pipe';

export * from './time/validator';
export * from './time/directive';
export * from './time/pipe';

import { titulo } from './titulo/validator';
import { TITULOValidator } from './titulo/directive';
import { TITULOPipe } from './titulo/pipe';

export * from './titulo/validator';
export * from './titulo/directive';
export * from './titulo/pipe';

import { utilsBr } from 'js-brasil';
import { TextMaskModule } from './angular2TextMask';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';

export const TextMask = {
  TextMaskModule
};

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
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomDirectives
  ],
  exports: [
    CustomDirectives, FormsModule, ReactiveFormsModule
  ]
})
class NgBrazil {
  public static forRoot(): ModuleWithProviders<NgBrazil> {
    return {
      ngModule: NgBrazil
    };
  }
}
export {
  NgBrazil
}
