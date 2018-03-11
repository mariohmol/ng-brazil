# Ng-Brazil

Angular5 pipes/directives/validators/mask for brazillian like apps

![Demo Image](/src/assets/print.png)


## Installation

To install this library with npm, run below command:

$ npm install --save ng-brazil inscricaoestadual angular2-text-mask 

Modules:

* cpf 
* cnpj 
* inscricaoestadual
* telefone

 
## Usage

### Configuration

Import module in root

```ts
import { NgBrasil } from 'ng-brazil' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ....,
    NgBrasil
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

If you would like to use masks import module;

```
imports: [
    ....,
    TextMaskModule,
    NgBrasil
  ], 
```


Then setup your component models as below :

```ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<input type="text" [cpf]>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { 
    this.formFields = {
      estado: [''],
      cpf: ['', [<any>Validators.required, <any>NgBrazilValidators.cpf]],
      cnpj: ['', [<any>Validators.required, <any>NgBrazilValidators.cnpj]],
      telefone: ['', [<any>Validators.required, <any>NgBrazilValidators.telefone]],
      inscricaoestadual: ['', [<any>Validators.required, <any>NgBrazilValidators.inscricaoestadual(this.estado)]]
    };
    this.form = this.fb.group(this.formFields);
  }

}
```

## Forms and Mask

```html
<input type="text" formControlName="cnpj" cnpj [textMask]="{mask: MASKS.cnpj.textMask}">
<input type="text" formControlName="cpf" cpf [textMask]="{mask: MASKS.cpf.textMask}">
<input type="text" formControlName="inscricaoestadual" inscricaoestadual="mg" [textMask]="{mask: MASKS.inscricaoestadual[estado].textMask}">
<input type="text" formControlName="telefone" telefone #telefone [textMask]="{mask: MASKS.telefone.textMaskFunction(telefone.value)}">
```
## Pipes

```html
CPF: From 12345678910 to {{'12345678910' | cpf}} <br/>
CNPJ: From 40841253000102 to {{'40841253000102' | cnpj}} <br/>
Inscrição Estadual: From 0018192630048 to {{'0018192630048' | inscricaoestadual: 'mg'}} <br/>
Telefone: From 3199998888 to {{'3199998888' | telefone}} <br/>
```

# Demo
Demo component files are included in Git Project.

Demo Project:
[https://github.com/mariohmol/ng-brazil/tree/master/src/app/demo)

Used as reference the pipes/validators from:

* https://github.com/yuyang041060120/ng2-validation
* https://github.com/text-mask/text-mask

# TODO

* make phone number mask be 5 digits to DDD 11

# License
MIT(./LICENSE)