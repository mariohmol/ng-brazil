import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from '../../../ng-brazil/src/lib.module';

const { MASKS, MASKSIE } = utilsBr;

// Formatted (masked) example values
const DATA: any = {
  cpf:      '156.631.881-50',
  cnpj:     '40.841.253/0001-02',
  cep:      '31.234-567',
  rg:       'MG-10.123.456',
  telefone: '(31) 99999-9998',
  placa:    'ADJ-5468',
  renavam:  '3769955358-9',
  pispasep: '123.12345.12-0',
  titulo:   '2053.9588.0302',
  time:     '06:33',
  currency: 'R$ 1.234,56',
};

// Raw values used to seed the masked inputs
// Note: time must use formatted value because validateBr.time rejects raw digits
const DATARAW: any = {
  cpf:      '15663188150',
  cnpj:     '40841253000102',
  cep:      '31234567',
  rg:       'MG10123456',
  telefone: '3199999998',
  placa:    'ADJ5468',
  renavam:  '37699553589',
  pispasep: '12312345120',
  titulo:   '205395880302',
  time:     '06:33',
  currency: '1234,56',
};

// Known-invalid values for static examples
const DATAERROR: any = {
  cpf:      '15663188151',
  cnpj:     '40841253000101',
  cep:      '3123456',
  rg:       'ZZ-10.123.456',
  telefone: '319999999',
  placa:    'AEJ123',
  renavam:  '37699553588',
  pispasep: '12312345122',
  titulo:   '205395880385',
  time:     '2533',
  currency: 'R$1000.10',
};

const FORMATS = [
  { key: 'cpf',      label: 'CPF' },
  { key: 'cnpj',     label: 'CNPJ' },
  { key: 'cep',      label: 'CEP' },
  { key: 'rg',       label: 'RG' },
  { key: 'telefone', label: 'Telefone' },
  { key: 'placa',    label: 'Placa' },
  { key: 'renavam',  label: 'Renavam' },
  { key: 'pispasep', label: 'PIS/PASEP' },
  { key: 'titulo',   label: 'Título' },
  { key: 'time',     label: 'Time' },
  { key: 'currency', label: 'Currency' },
];

@Component({ standalone: false,
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public MASKS = MASKS;
  public MASKSIE = MASKSIE;
  public form: any;
  public staticRows: any[] = [];

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      cpf:      [DATARAW.cpf,      [<any>Validators.required, <any>NgBrazilValidators.cpf]],
      cnpj:     [DATARAW.cnpj,     [<any>Validators.required, <any>NgBrazilValidators.cnpj]],
      cep:      [DATARAW.cep,      [<any>Validators.required, <any>NgBrazilValidators.cep]],
      rg:       [DATARAW.rg,       [<any>Validators.required, <any>NgBrazilValidators.rg]],
      telefone: [DATARAW.telefone, [<any>Validators.required, <any>NgBrazilValidators.telefone]],
      placa:    [DATARAW.placa,    [<any>Validators.required, <any>NgBrazilValidators.placa]],
      renavam:  [DATARAW.renavam,  [<any>Validators.required, <any>NgBrazilValidators.renavam]],
      pispasep: [DATARAW.pispasep, [<any>Validators.required, <any>NgBrazilValidators.pispasep]],
      titulo:   [DATARAW.titulo,   [<any>Validators.required, <any>NgBrazilValidators.titulo]],
      time:     [DATARAW.time,     [<any>Validators.required, <any>NgBrazilValidators.time]],
      currency: [DATARAW.currency, [<any>Validators.required, <any>NgBrazilValidators.currency]],
    });

    this.staticRows = FORMATS.map(f => ({
      key:          f.key,
      label:        f.label,
      validValue:   DATA[f.key],
      invalidValue: DATAERROR[f.key],
      validOk:      this.checkValid(f.key, DATA[f.key]),
      invalidOk:    this.checkValid(f.key, DATAERROR[f.key]),
    }));
  }

  checkValid(key: string, value: string): boolean {
    if (!NgBrazilValidators[key]) { return true; }
    const ctrl = new FormControl(value);
    return NgBrazilValidators[key](ctrl) === null;
  }

  generate() {
    this.form.patchValue({
      cpf:      DATA.cpf,
      cnpj:     DATA.cnpj,
      cep:      DATA.cep,
      rg:       DATA.rg,
      telefone: DATA.telefone,
      placa:    DATA.placa,
      renavam:  DATA.renavam,
      pispasep: DATA.pispasep,
      titulo:   DATA.titulo,
      time:     DATA.time,
      currency: DATA.currency,
    });
  }

  badgeState(key: string): 'empty' | 'valid' | 'invalid' {
    if (!this.form) { return 'empty'; }
    const ctrl = this.form.get(key);
    if (!ctrl) { return 'empty'; }
    const val = (ctrl.value || '').replace(/[^a-zA-Z0-9]/g, '').trim();
    if (!val) { return 'empty'; }
    return ctrl.valid ? 'valid' : 'invalid';
  }
}
