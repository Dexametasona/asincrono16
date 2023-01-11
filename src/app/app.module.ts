import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Asinc16Module } from './asinc16/asinc16.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Asinc16Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
