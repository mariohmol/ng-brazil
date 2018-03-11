# Ng-Brazil

Angular5 pipes/directives.validators for brazillian like apps



## Installation

To install this library with npm, run below command:

$ npm install --save ng-brazil

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
    
  }

}
```


# Demo
Demo component files are included in Git Project.

Demo Project:
[https://github.com/mariohmol/ng-brazil/tree/master/src/app/demo)

Used as reference the pipes/validators from:

* https://github.com/yuyang041060120/ng2-validation
* https://github.com/text-mask/text-mask

# License
MIT(./LICENSE)