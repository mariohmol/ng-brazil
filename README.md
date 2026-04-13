# Ng-Brazil

Contains pipes / directives / validators / masks for Brazilian Angular apps.

[![CI](https://github.com/mariohmol/ng-brazil/actions/workflows/ci.yml/badge.svg)](https://github.com/mariohmol/ng-brazil/actions/workflows/ci.yml)

## Angular compatibility

| ng-brazil | Angular |
|-----------|---------|
| 4.x       | 15 – 19 |
| 3.x       | 13 – 14 |

## Live demo

* https://test.counbo.com/ng-brazil/

## Modules

* CPF
* CNPJ
* RG
* Inscrição Estadual
* Telefone e Celular
* CEP
* Currency (Dinheiro)
* Time (horas e minutos)
* Number (número e ponto decimal)
* Placa de Carro
* Renavam
* Título de Eleitor
* PIS/PASEP
* Processo Jurídico


## Installation

```bash
npm install --save ng-brazil js-brasil
```

## Usage

### Import the module

```ts
import { NgBrazil } from 'ng-brazil';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgBrazil,          // includes TextMaskModule — no separate install needed
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> **Note:** `TextMaskModule` is bundled inside `ng-brazil`. You no longer need to install `angular2-text-mask` separately.

### Validators (Reactive Forms)

```ts
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { Validators, FormBuilder } from '@angular/forms';

@Component({ ... })
export class AppComponent {
  public MASKS = MASKS;

  form = this.fb.group({
    cpf:             ['', [Validators.required, NgBrazilValidators.cpf]],
    cnpj:            ['', [Validators.required, NgBrazilValidators.cnpj]],
    rg:              ['', [Validators.required, NgBrazilValidators.rg]],
    cep:             ['', [Validators.required, NgBrazilValidators.cep]],
    telefone:        ['', [Validators.required, NgBrazilValidators.telefone]],
    placa:           ['', [Validators.required, NgBrazilValidators.placa]],
    renavam:         ['', [Validators.required, NgBrazilValidators.renavam]],
    pispasep:        ['', [Validators.required, NgBrazilValidators.pispasep]],
    titulo:          ['', [Validators.required, NgBrazilValidators.titulo]],
    time:            ['', [Validators.required, NgBrazilValidators.time]],
    currency:        ['', [Validators.required, NgBrazilValidators.currency]],
    inscricaoestadual: ['', [Validators.required, NgBrazilValidators.inscricaoestadual('mg')]],
  });

  constructor(private fb: FormBuilder) {}
}
```

### Masked inputs (template)

```html
<input type="text" formControlName="cpf"      cpf      [textMask]="{mask: MASKS.cpf.textMask}">
<input type="text" formControlName="cnpj"     cnpj     [textMask]="{mask: MASKS.cnpj.textMask}">
<input type="text" formControlName="rg"       rg       [textMask]="{mask: MASKS.rg.textMask}">
<input type="text" formControlName="cep"      cep      [textMask]="{mask: MASKS.cep.textMask}">
<input type="text" formControlName="telefone" telefone [textMask]="{mask: MASKS.telefone.textMaskFunction}">
<input type="text" formControlName="placa"    placa    [textMask]="{mask: MASKS.placa.textMask}">
<input type="text" formControlName="renavam"  renavam  [textMask]="{mask: MASKS.renavam.textMask}">
<input type="text" formControlName="pispasep" pispasep [textMask]="{mask: MASKS.pispasep.textMask}">
<input type="text" formControlName="titulo"   titulo   [textMask]="{mask: MASKS.titulo.textMask}">
<input type="text" formControlName="time"     time     [textMask]="{mask: MASKS.time.textMask}">
<input type="text" formControlName="currency" currency [textMask]="{mask: MASKS.currency.textMask}">
<input type="text" formControlName="number"   number   [textMask]="{mask: MASKS.number.textMask}">

<!-- Inscrição Estadual — pass the selected state -->
<input type="text" formControlName="inscricaoestadual"
       inscricaoestadual="mg"
       [textMask]="{mask: MASKS.inscricaoestadual['mg'].textMask}">
```

### Pipes

```html
{{ '15663188150'    | cpf }}               <!-- 156.631.881-50 -->
{{ '40841253000102' | cnpj }}              <!-- 40.841.253/0001-02 -->
{{ 'MG10123456'     | rg }}               <!-- MG-10.123.456 -->
{{ '31234567'       | cep }}               <!-- 31.234-567 -->
{{ '3199999998'     | telefone }}          <!-- (31) 9999-9998 -->
{{ 'ADJ5468'        | placa }}             <!-- ADJ-5468 -->
{{ '37699553589'    | renavam }}           <!-- 3769955358-9 -->
{{ '12312345120'    | pispasep }}          <!-- 123.12345.12-0 -->
{{ '0018192630048'  | inscricaoestadual: 'mg' }}
{{ '1234,56'        | currencyBrazil }}    <!-- R$ 1.234,56 -->
{{ '1234,56'        | numberBrazil: 2 }}   <!-- 1.234,56 -->
{{ '0633'           | time }}              <!-- 06:33 -->
```

### Using pipes in TypeScript

```ts
import { NgBrDirectives } from 'ng-brazil';

const formatted = new NgBrDirectives.InscricaoEstadualPipe()
  .transform('625085487072', 'sp');
```

## Troubleshooting

### `js-brasil` fails to compile / CommonJS warning in Angular 11+

Angular 11 introduced stricter handling of CommonJS dependencies. Because `js-brasil` ships
a CommonJS build, Angular may print a warning or fail with an error like:

```
WARNING in js-brasil (and its dependencies) should be converted to ES modules.
CommonJS or AMD dependencies can cause optimization bailouts.
```

**Fix:** add `js-brasil` to `allowedCommonJsDependencies` in your project's `angular.json`:

```json
{
  "projects": {
    "<your-app>": {
      "architect": {
        "build": {
          "options": {
            "allowedCommonJsDependencies": ["js-brasil"]
          }
        }
      }
    }
  }
}
```

See the [Angular CommonJS dependencies guide](https://angular.io/guide/build#configuring-commonjs-dependencies)
for more details.

---

## Collaborate

```bash
npm install
npm run build:lib   # build the library
npm run build:demo  # build the demo app
npm run start       # serve the demo locally
```

To publish a new release, update the version in `package.json` and `ng-brazil/package.json`, then run `npm run publishnpm`.

## References

* https://github.com/mariohmol/js-brasil
* https://github.com/text-mask/text-mask

## License

MIT
