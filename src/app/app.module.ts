import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, Hero } from './app.component';


@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
