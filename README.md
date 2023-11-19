# NgxRender

## api
`http://localhost:4000/home`

```ts
export interface IApi {
  data: NonNullable<unknown>;
  width: number;
  height: number;
  type: ChartType;
  externalCSS?: string;
  ngxOptions?: Partial<INgxOptions>;
}

export enum ChartType {
  HorizontalBar = 'HorizontalBar',
  VerticalBar = 'VerticalBar',
  PieChart = 'PieChart',
}

export interface INgxOptions {
  showXAxis: boolean;
  showYAxis: boolean;
  showLegend: boolean;
  legendTitle: string;
  legendPosition: LegendPosition;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  showGridLines: boolean;
  showDataLabel: boolean;
  trimXAxisTicks: boolean;
  trimYAxisTicks: boolean;
  maxXAxisTickLength: number;
  maxYAxisTickLength: number;
  rotateXAxisTicks: boolean;
  wrapTicks: boolean;
}
```
