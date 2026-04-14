import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from '../../../ng-brazil/src/lib.module';

const { MASKS, MASKSIE } = utilsBr;

// ── Random-value generators ──────────────────────────────────────────────────

function rndDigits(n: number): string {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('');
}

function rndLetter(): string {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function pad(n: number, len: number): string {
  return String(n).padStart(len, '0');
}

function genCpf(): string {
  const b = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  const d1 = (() => {
    const s = b.reduce((sum, v, i) => sum + v * (10 - i), 0);
    const r = (s * 10) % 11;
    return r === 10 ? 0 : r;
  })();
  const d2 = (() => {
    const s = b.reduce((sum, v, i) => sum + v * (11 - i), 0) + d1 * 2;
    const r = (s * 10) % 11;
    return r === 10 ? 0 : r;
  })();
  return b.join('') + d1 + d2;
}

function cnpjDig(digits: number[]): number {
  const weights = digits.length === 12
    ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const s = digits.reduce((sum, v, i) => sum + v * weights[i], 0);
  const r = s % 11;
  return r < 2 ? 0 : 11 - r;
}

function genCnpj(): string {
  const b = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
  const base = [...b, 0, 0, 0, 1];
  const d1 = cnpjDig(base);
  const d2 = cnpjDig([...base, d1]);
  return base.join('') + d1 + d2;
}

function genRenavam(): string {
  const b = rndDigits(10);
  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const s = b.split('').reduce((sum, c, i) => sum + parseInt(c) * weights[i], 0);
  const r = (s * 10) % 11;
  return b + (r === 10 ? 0 : r);
}

function genPis(): string {
  const b = rndDigits(10);
  const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let d = 0;
  for (let i = 0, p = 2; i < 10; i++, p = p < 9 ? p + 1 : 2) {
    d += parseInt(b[9 - i]) * p;
  }
  const digit = ((10 * d) % 11) % 10;
  return b + digit;
}

function genTitulo(): string {
  const seq = rndDigits(8);
  const stateNum = 1 + Math.floor(Math.random() * 28);
  const state = pad(stateNum, 2);
  const base = seq + state;
  const exce = stateNum === 1 || stateNum === 2;

  const titStr = ('000000000000' + base).slice(-11);
  let d1Sum = titStr.slice(0, 9).split('').reduce((s, c, i) => {
    const w = [2, 9, 8, 7, 6, 5, 4, 3, 2][i];
    return s + parseInt(c) * w;
  }, 0);
  let rem1 = d1Sum % 11;
  let dig1 = rem1 === 0 ? (exce ? 1 : 0) : (rem1 === 1 ? 0 : 11 - rem1);

  let d2Sum = parseInt(titStr[9]) * 4 + parseInt(titStr[10]) * 3 + dig1 * 2;
  let rem2 = d2Sum % 11;
  let dig2 = rem2 === 0 ? (exce ? 1 : 0) : (rem2 === 1 ? 0 : 11 - rem2);

  return base + dig1 + dig2;
}

function genRawValues() {
  const states = ['ac','al','ap','am','ba','ce','df','es','go','ma','mt','ms',
                  'mg','pa','pb','pr','pe','pi','rj','rn','rs','ro','rr','sc','sp','se','to'];
  const rgState = states[Math.floor(Math.random() * states.length)];

  const area = pad(11 + Math.floor(Math.random() * 89), 2);

  const intPart = (Math.floor(Math.random() * 9999) + 1)
    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const decPart = pad(Math.floor(Math.random() * 100), 2);

  const h = pad(Math.floor(Math.random() * 24), 2);
  const m = pad(Math.floor(Math.random() * 60), 2);

  return {
    cpf:      genCpf(),
    cnpj:     genCnpj(),
    cep:      rndDigits(8),
    rg:       rgState + rndDigits(8),
    telefone: area + '9' + rndDigits(8),
    placa:    rndLetter() + rndLetter() + rndLetter() + rndDigits(4),
    renavam:  genRenavam(),
    pispasep: genPis(),
    titulo:   genTitulo(),
    time:     `${h}:${m}`,
    currency: `${intPart},${decPart}`,
  };
}

// ── Static seed data ─────────────────────────────────────────────────────────

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
    this.form.patchValue(genRawValues());
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
