import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { NgIf } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BarChartModule, NgIf],
  bootstrap: [AppComponent],
  providers: [provideClientHydration()],
})
export class AppModule {}
