import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HocModule } from '../../components/hoc/hoc.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    NgxChartsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    HocModule,
  ],
})
export class HomeModule {}
