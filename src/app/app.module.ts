import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConverterComponent } from '../converter/converter.component';
import { ConverterService } from '../converter/converter.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
