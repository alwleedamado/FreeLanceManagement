import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldsModule } from '../form-fields/form-fields.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		InlineSVGModule,
		StoreModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldsModule,
    
  ]
})
export class CoreModule { }
