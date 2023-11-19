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
    rotateXAxisTicks: true,
    wrapTicks: false,
    legendPosition: LegendPosition.Right,
    legendTitle: 'Legend',
    maxXAxisTickLength: 16,
    maxYAxisTickLength: 16,
    showDataLabel: false,
    showGridLines: true,
    showLegend: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    trimXAxisTicks: true,
    trimYAxisTicks: true,
    xAxisLabel: 'Country',
    yAxisLabel: 'GDP Per Capita',
    showXAxis: true,
    showYAxis: true,
  };

  constructor(props?: ApiChartParamData) {
    this.type = props?.type || 'BarVerticalComponent';
    Object.assign(this.ngxOptions, props?.ngxOptions);
    this.externalCSS = props?.externalCSS ?? '';
  }
}
