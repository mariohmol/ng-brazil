import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { utilsBr, fakerBr } from 'js-brasil';
import { NgBrazilValidators, NgBrDirectives } from '../../../ng-brazil/src/lib.module';

const {MASKS, MASKSIE } = utilsBr;

export const DATA = {
  cpf: '156.631.881-50',
  cnpj: '40.841.253/0001-02',
  cep: '31.234-567',
  currency: 'R$ 1.234,56',
  inscricaoestadual: {
    ac: '01.004.823/001-12',
    al: '240000048',
    am: '04.145.871-0',
    ap: '240000048',
    ba: '123456-63',
    ce: '06.000001-5',
    df: '06 000001 123-55',
    es: '082.560.67-6',
    go: '06.000.001-5',
    ma: '12.104.376-2',
    mg: '001.819.263/0048',
    ms: '001819263',
    mt: '0018192630-1',
    pa: '06-000001-5',
    pb: '06000001-5',
    pe: '0192310-24',
    pi: '19.301.656-7',
    pr: '19301656-78',
    rj: '20.040.04-1',
    rn: '20.040.040-1',
    ro: '101.62521-3',
    rr: '24006628-1',
    rs: '024/0440013',
    sc: '271.234.563',
    se: '27123456-3',
    sp: '114.814.878.119',
    to: '11 81 4878119',
  },
  number: '1.234,56',
  pispasep: '123.12345.12-1',
  placa: 'ADJ-5468',
  renavam: '3769955358-9',
  rg: 'MG-10.123.456',
  telefone: '(31) 99999-9998',
  time: '06:33',
  titulo: '2053.9588.0384'
}

// const rawIE = {};
// const rawIEError = {};
// for (const key in DATA.inscricaoestadual) {
//   if (!key) {
//     continue;
//   }
//   rawIE[key] = DATA.inscricaoestadual[key].replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '').replace(/ /g, '');
//   rawIEError[key] = rawIE[key] + '6';
// }
export const DATARAW = {
  cpf: '15663188150',
  cnpj: '40841253000102',
  cep: '31234567',
  currency: '1234,56',
  currencyNumber: 1234.56,
  number: '1234,5656',
  inscricaoestadual: {
    ac: '0100482300112',
    al: '240000048',
    am: '041458710',
    ap: '240000048',
    ba: '12345663',
    ce: '060000015',
    df: '0600000112355',
    es: '082560676',
    go: '060000015',
    ma: '121043762',
    mg: '0018192630048',
    ms: '001819263',
    mt: '00181926301',
    pa: '060000015',
    pb: '060000015',
    pe: '019231024',
    pi: '193016567',
    pr: '1930165678',
    rj: '20040041',
    rn: '200400401',
    ro: '101625213',
    rr: '240066281',
    rs: '0240440013',
    sc: '271234563',
    se: '271234563',
    sp: '114814878119',
    to: '11814878119'
  },
  pispasep: '12312345121',
  placa: 'ADJ5468',
  renavam: '37699553589',
  rg: 'MG10123456',
  telefone: '3199999998',
  time: '0633',
  titulo: '205395880384'
}


export const DATAERROR = {
  cpf: '15663188151',
  cnpj: '40841253000101',
  cep: '3123456',
  currency: 'R$1000.10',
  inscricaoestadual: {
    ac: '01004823001126',
    al: '2400000486',
    am: '0414587106',
    ap: '2400000486',
    ba: '123456636',
    ce: '0600000156',
    df: '06000001123556',
    es: '0825606766',
    go: '0600000156',
    ma: '1210437626',
    mg: '00181926300486',
    ms: '0018192636',
    mt: '001819263016',
    pa: '0600000156',
    pb: '0600000156',
    pe: '0192310246',
    pi: '1930165676',
    pr: '19301656786',
    rj: '200400416',
    rn: '20040040166',
    ro: '1016252136',
    rr: '2400662816',
    rs: '02404400136',
    sc: '2712345636',
    se: '2712345636',
    sp: '1148148781196',
    to: '118148781196'
  },
  number: '1000.10',
  pispasep: '12312345121',
  placa: 'AEJ123',
  renavam: '37699553588',
  rg: 'MG1012345',
  telefone: '319999999',
  time: '0633',
  titulo: '205395880384'
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public MASKS = MASKS;
  public MASKSIE = MASKSIE;
  public DATARAW = DATARAW;
  estado = 'mg';
  estados = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma',
    'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs',
    'sc', 'se', 'sp', 'to'
  ];
  public currencyNumber = 1234.56;

  public formFields;
  public formData: any = {};
  public formDataValidate: any = {};
  public form;
  public formNoMask;
  public data = DATA;
  generated = {};

  constructor(public fb: FormBuilder) {

  }

  objectKeys(k) {
    if (!k) {
      return []
    }
    return Object.keys(k);
  }

  ngOnInit() {
    this.init();
  }

  init() {
    // TODO: Taking examples from here https://github.com/gammasoft/ie/blob/master/testes/testes.js

    this.formFields = {
      estado: [''],
      cpf: ['', [<any>Validators.required, <any>NgBrazilValidators.cpf]],
      cnpj: ['', [<any>Validators.required, <any>NgBrazilValidators.cnpj]],
      rg: ['', [<any>Validators.required, <any>NgBrazilValidators.rg]],
      inscricaoestadual: ['', [<any>Validators.required, <any>NgBrazilValidators.inscricaoestadual(this.estado)]],
      telefone: ['', [<any>Validators.required, <any>NgBrazilValidators.telefone]],
      cep: ['', [<any>Validators.required, <any>NgBrazilValidators.cep]],
      currency: ['', [<any>Validators.required, <any>NgBrazilValidators.currency]],
      currencyNumber: [0, [<any>Validators.required, <any>NgBrazilValidators.currency]],
      number: ['', [<any>Validators.required, <any>NgBrazilValidators.number]],
      time: ['', [<any>Validators.required, <any>NgBrazilValidators.time]],
      pispasep: ['', [<any>Validators.required, <any>NgBrazilValidators.pispasep]],
      placa: ['', [<any>Validators.required, <any>NgBrazilValidators.placa]],
      renavam: ['', [<any>Validators.required, <any>NgBrazilValidators.renavam]],
      titulo: ['', [<any>Validators.required, <any>NgBrazilValidators.titulo]]
    };
    this.form = this.fb.group(this.formFields);
    this.formNoMask = this.fb.group(this.formFields);

    const {
      cpf, cnpj, cep, rg, telefone,
      currency, currencyNumber, number, time, placa, titulo,
    } = DATARAW;

    this.form.patchValue({
      cpf, cnpj, cep, rg, telefone,
      currency, currencyNumber, number, time, placa, titulo,
    })
  }

  generate(key) {
    if (fakerBr[key]) {
      this.generated[key] = fakerBr[key]();
    }
  }

  // generateParam(key, param) {
  //   if (fakerBr[key] && fakerBr[key][param]) {
  //     this.generated[key] = fakerBr[key][param]();
  //   }

  // }

  submit(form) {
    this.formData = form.value;
    console.info(form.valid);
    console.info(form.errors);
    for (const c in form.controls) {
      if (!c) {
        continue;
      }
      const control = form.controls[c];
      console.info(c, control.errors)
      this.formDataValidate[c] = control.errors;
    }
  }

  changeState(e) {
    const val = e.target.value;
    this.estado = val;
  }

  inscricaoestadual() {
    return new NgBrDirectives.InscricaoEstadualPipe().transform('625085487072', 'sp');
  }

}
