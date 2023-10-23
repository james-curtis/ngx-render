import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [AppModule, BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
