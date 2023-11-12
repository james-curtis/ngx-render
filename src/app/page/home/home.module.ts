import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {BarChartModule, PieChartModule} from '@swimlane/ngx-charts';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    BarChartModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    PieChartModule,
    NgSwitchDefault,
  ],
})
export class HomeModule {}
