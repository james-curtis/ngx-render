import { ChartType, IChartParam, INgxOptions } from '../interface/chart-param.interface';
import { LegendPosition } from '@swimlane/ngx-charts';

export class ChartParamModel implements IChartParam {
  data: unknown;
  width: number;
  height: number;
  type: ChartType;
  externalCSS: string;
  ngxOptions: INgxOptions = {
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

  constructor(props?: IChartParam) {
    this.data = props?.data || null;
    this.width = Number(props?.width) || 700;
    this.height = Number(props?.height) || 300;
    this.type = props?.type || ChartType.VerticalBar;
    Object.assign(this.ngxOptions, props?.ngxOptions);
    this.externalCSS = props?.externalCSS ?? '';
  }
}
