import {
  ApiChartParamData,
  ChartParam,
  ChartType,
  NgxOptions,
} from '../interface/chart-param.interface';
import { LegendPosition } from '@swimlane/ngx-charts';

export class ChartParamModel implements ChartParam {
  type: ChartType;
  externalCSS: string;
  ngxOptions: NgxOptions = {
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
    showGridLines: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'xAxisLabel',
    yAxisLabel: 'yAxisLabel',
    xAxis: true,
    yAxis: true,
    legend: true,
    view: [700, 300],
    animations: false,
  };

  constructor(props?: ApiChartParamData) {
    this.type = props?.type || 'BarVerticalComponent';
    Object.assign(this.ngxOptions, props?.ngxOptions);
    this.externalCSS = props?.externalCSS ?? '';
  }
}
