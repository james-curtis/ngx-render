export enum ChartType {
  HorizontalBar = 'HorizontalBar',
  VerticalBar = 'VerticalBar',
  PieChart = 'PieChart',
}

export interface IChartParam {
  data: NonNullable<unknown>;
  width: number;
  height: number;
  type: ChartType;
}
