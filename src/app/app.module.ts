import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BarChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
