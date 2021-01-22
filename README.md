# Ng-Brazil


Contains pipes / directives / validators / mask for brazillian like apps

[![Build Status](https://travis-ci.org/mariohmol/ng-brazil.svg?branch=master)](https://travis-ci.org/mariohmol/ng-brazil)

Supports: Angular2 to Angular10

## Live example:  

* https://stackblitz.com/edit/ng-brazil

This project was tested integrated with the following techs:

* angular
* angular-material
* ionic3 (masks is not fully working, that is an issue for that, but pipes/directives/validators/mask works)

Modules:

* CPF 
* CNPJ
* RG
* Inscrição Estadual
* Telefone e Celular
* CEP
* Currency (Dinheiro)
* Time (horas e minutos)
* Number (numero e ponto decimal)
* Placa de Carro
* Renavam
* Título de Eleitor
* Proceso Jurídico


See the demo working project:


![Demo Image](/src/assets/print.png)


## Installation

To install this library with npm, run:

` npm install --save ng-brazil js-brasil`



 
## Usage

### Configuration

Import module in root

```ts
import { NgBrazil } from 'ng-brazil' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ....,
    NgBrazil
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


#### Using Masks

If you would like to use masks install the module: 

`npm i -S angular2-text-mask text-mask-addons`


And import to your main app:

```ts
import { TextMaskModule } from 'angular2-text-mask';

imports: [
    ....,
    TextMaskModule,
    NgBrazil
  ], 
```


Then setup your component:

```ts
import { Component } from '@angular/core';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-root',
  template: '<input type="text" [cpf]>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public MASKS = MASKS;
  
  constructor() { 
    this.formFields = {
      estado: [''],
      cpf: ['', [<any>Validators.required, <any>NgBrazilValidators.cpf]],
      cnpj: ['', [<any>Validators.required, <any>NgBrazilValidators.cnpj]],
      rg: ['', [<any>Validators.required, <any>NgBrazilValidators.rg]],
      cep: ['', [<any>Validators.required, <any>NgBrazilValidators.cep]],
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
<input type="text" formControlName="rg" rg [textMask]="{mask: MASKS.rg.textMask}"> 
<input type="text" formControlName="inscricaoestadual" inscricaoestadual="mg" [textMask]="{mask: MASKS.inscricaoestadual[estado].textMask}">
<input type="text" formControlName="telefone" telefone #telefone [textMask]="{mask: MASKS.telefone.textMaskFunction}">
<input type="text" formControlName="cep" cep [textMask]="{mask: MASKS.cep.textMask}">

<input type="text" formControlName="number" number [textMask]="{mask: MASKS.number.textMask}">
```
## Pipes

```html
CPF: From 12345678910 to {{'12345678910' | cpf}} <br/>
CNPJ: From 40841253000102 to {{'40841253000102' | cnpj}} <br/>
RG: From MG10111222 to {{'MG10111222' | rg}} <br/>
Inscrição Estadual: From 0018192630048 to {{'0018192630048' | inscricaoestadual: 'mg'}} <br/>
Telefone: From 3199998888 to {{'3199998888' | telefone}} <br/>
Number: From 123.23 to {{'123.23' | numberBrazil}} <br/>
Number sem decimais: From 123.23 to {{'123.23' | numberBrazil: 0}} <br/>
Currency: From 123.23 to {{'123.23' | currencyBrazil}} <br/>
```

```ts
import { Component } from '@angular/core';
import { NgBrDirectives } from 'ng-brazil';

@Component({
  selector: 'app-root',
  template: '<input type="text" [cpf]>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inscricaoestadual() {
    const {InscricaoEstadualPipe} = NgBrDirectives;
    return new InscricaoEstadualPipe()
      .transform('625085487072', 'sp');
  }
}
```
# Demo

Demo component files are included in Git Project.

Demo Project:
[https://github.com/mariohmol/ng-brazil/tree/master/src/app/demo)

Reference projects:

* https://github.com/mariohmol/js-brasil
* https://github.com/yuyang041060120/ng2-validation
* https://github.com/text-mask/text-mask


# TODO

There is some issues to work with, check it out

## Collaborate

Fork this project then install global libs:

*  npm i -g rimraf ng-packagr @angular/compiler-cli @angular/compiler tslib ngc

Finally working in the project folder:

* npm i
* npm run build:lib
* npm run dist
* npm run start

To publish a new release, update the version in [package.json](./package.json) and [src/package.json](./src/package.json),
then run `npm run publish-npm`.

# License

MIT(./LICENSE)
