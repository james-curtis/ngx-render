import {
  Inject,
  Injectable,
  makeStateKey,
  Optional,
  StateKey,
  TransferState,
} from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { PlatformService } from '../platform/platform.service';
import { ChartParamModel } from '../../model/chart-param.model';
import { ChartType, IChartParam } from '../../interface/chart-param.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  private readonly chartParamModel: ChartParamModel | undefined;
  private readonly chartParamStateKey: StateKey<ChartParamModel> =
    makeStateKey<ChartParamModel>('chartData');

  constructor(
    @Optional() @Inject(REQUEST) private readonly request: Request,
    private readonly platformService: PlatformService,
    private readonly transferState: TransferState,
  ) {
    if (this.platformService.isServer()) {
      const defaultParams: IChartParam = {
        data: {},
        width: 700,
        height: 300,
        type: ChartType.VerticalBar,
      };
      const params = Object.assign(
        {},
        defaultParams,
        this.request.query,
        this.request.body,
      );
      this.chartParamModel = new ChartParamModel(params);
      this.transferState.set(
        this.chartParamStateKey,
        JSON.parse(JSON.stringify(this.chartParamModel)),
      );
    }

    if (this.platformService.isBrowser()) {
      const chartParam: IChartParam | undefined = this.transferState.get(
        this.chartParamStateKey,
        undefined,
      );
      if (chartParam) this.chartParamModel = new ChartParamModel(chartParam);
    }
  }

  getChartParam(): ChartParamModel | undefined {
    return this.chartParamModel;
  }
}
