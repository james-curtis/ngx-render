import { ChartType, IChartParam } from '../interface/chart-param.interface';

export class ChartParamModel implements IChartParam {
  data: NonNullable<unknown>;
  width: number;
  height: number;
  type: ChartType;

  constructor(props: IChartParam) {
    this.data = props.data;
    this.width = Number(props.width);
    this.height = Number(props.height);
    this.type = props.type;
  }
}
