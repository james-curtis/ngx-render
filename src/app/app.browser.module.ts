import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

@NgModule({
  imports: [AppModule, BrowserModule, BrowserAnimationsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}
