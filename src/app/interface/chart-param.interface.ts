import * as ngx from '@swimlane/ngx-charts';

export type ChartType = keyof typeof ngx;

export type NgxOptions = Record<string, unknown>;

export interface ChartParam {
  type: ChartType;
  externalCSS?: string;
  ngxOptions?: Partial<NgxOptions>;
}

export type ApiChartParamData = Partial<ChartParam>;
