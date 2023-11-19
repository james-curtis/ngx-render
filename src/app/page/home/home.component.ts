import { Component, Type } from '@angular/core';
import { PlatformService } from '../../service/platform/platform.service';
import { ChartsService } from '../../service/charts/charts.service';
import { ChartType, NgxOptions } from '../../interface/chart-param.interface';
import * as ngx from '@swimlane/ngx-charts';
import { BarVerticalComponent, BaseChartComponent } from '@swimlane/ngx-charts';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private type: ChartType = 'BarVerticalComponent';
  component: Type<Component> = BarVerticalComponent as unknown as Type<Component>;
  options!: NgxOptions;
  externalCSS: string = '';

  private readonly defaultOptions: NgxOptions = {
    results: [
      {
        name: 'Germany',
        value: 40632,
        extra: {
          code: 'de',
        },
      },
      {
        name: 'United States',
        value: 50000,
        extra: {
          code: 'us',
        },
      },
      {
        name: 'France',
        value: 36745,
        extra: {
          code: 'fr',
        },
      },
      {
        name: 'United Kingdom',
        value: 36240,
        extra: {
          code: 'uk',
        },
      },
      {
        name: 'Spain',
        value: 33000,
        extra: {
          code: 'es',
        },
      },
      {
        name: 'Italy',
        value: 35800,
        extra: {
          code: 'it',
        },
      },
    ],
    xAxis: true,
    yAxis: true,
    legend: true,
    legendTitle: 'Legend',
    showXAxisLabel: true,
    showYAxisLabel: true,
    view: [700, 300],
    animations: false,
  };
  private readonly componentMap: Map<string, Type<Component>> = new Map();

  constructor(
    private readonly platformService: PlatformService,
    private readonly chartsService: ChartsService,
  ) {
    Object.entries(ngx).map(([name, comp]) => {
      const _comp = comp as any;
      if (!(_comp?.prototype instanceof BaseChartComponent)) return;
      this.componentMap.set(name, _comp);
    });

    const chartParam = this.chartsService.getChartParam();
    if (!chartParam) return;
    this.type = chartParam.type;
    this.options = Object.assign({}, this.defaultOptions, chartParam.ngxOptions);
    this.externalCSS = chartParam.externalCSS;
    if (!this.componentMap.has(this.type)) {
      throw new Error(`can not found ${this.type}`);
    }
    this.component = this.componentMap.get(this.type)!;
  }
}
