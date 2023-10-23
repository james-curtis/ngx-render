import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BarChartModule, NgIf],
  bootstrap: [AppComponent],
})
export class AppModule {}
