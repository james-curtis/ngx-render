import { NgModule } from '@angular/core';
import { HomeComponent } from './index/home.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { NgIf } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, BarChartModule, NgIf],
})
export class HomeModule {}
