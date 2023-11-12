import { Component } from '@angular/core';
import { PlatformService } from '../../service/platform/platform.service';
import { ChartsService } from '../../service/charts/charts.service';
import { ChartType } from '../../interface/chart-param.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  view: [number, number] = [700, 300];
  data: NonNullable<unknown> = [
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
  ];
  type: ChartType = ChartType.VerticalBar;
  protected readonly ChartType = ChartType;

  constructor(
    private readonly platformService: PlatformService,
    private readonly chartsService: ChartsService,
  ) {
    const chartParam = this.chartsService.getChartParam();
    if (!chartParam) return;
    this.view = [chartParam.width, chartParam.height];
    // this.data = chartParam.data;
    this.type = chartParam.type;
  }
}
