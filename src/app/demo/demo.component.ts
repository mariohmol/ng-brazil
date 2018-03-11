import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  estado = 'mg';
  estados = ['mg', 'sp'];
  public formFields;
  public formData: any = {};
  public formDataValidate: any = {};
  public form;
  public data;
  objectKeys = Object.keys;

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.init();
  }

  init() {
    // TODO: Taking examples from here https://github.com/gammasoft/ie/blob/master/testes/testes.js
    this.data = {
      cpf: '156.631.881-50',
      cnpj: '40.841.253/0001-02',
      telefone: '(31) 9999-9998',
      inscricaoestadual: {
        'ma': '12.104.376-2',
        'pi': '19.301.656-7',
        'ce': '06.000001-5',
        'mg': '00181926300-48',
        'sp': '114.814.878.119'
      }
    }

    this.formFields = {
      estado: [''],
      cpf: ['', [<any>Validators.required, <any>NgBrazilValidators.cpf]],
      cnpj: ['', [<any>Validators.required, <any>NgBrazilValidators.cnpj]],
      telefone: ['', [<any>Validators.required, <any>NgBrazilValidators.telefone]],
      inscricaoestadual: ['', [<any>Validators.required, <any>NgBrazilValidators.inscricaoestadual(this.estado)]]
    };
    this.form = this.fb.group(this.formFields);

  }

  submit() {
    this.formData = this.form.value;
    console.log(this.form.valid);
    console.log(this.form.errors);
    for (const c in this.form.controls) {
      if (!c) {
        continue;
      }
      const control = this.form.controls[c];
      console.log(c, control.errors)
      this.formDataValidate[c] = control.errors;
    }
  }
}
