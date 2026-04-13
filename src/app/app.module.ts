import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgBrazil } from '../../ng-brazil/src/public_api';
import { TextMaskModule } from '../../ng-brazil/src/angular2TextMask';
import { DemoComponent } from './demo/demo.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  declarations: [
    AppComponent, DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
