import { Inject, Injectable, makeStateKey, Optional, StateKey, TransferState } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { PlatformService } from '../platform/platform.service';
import { ChartParamModel } from '../../model/chart-param.model';
import { ChartType, ChartParam, ApiChartParamData } from '../../interface/chart-param.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  private readonly chartParamModel: ChartParamModel;
  private readonly chartParamStateKey: StateKey<ChartParamModel> =
    makeStateKey<ChartParamModel>('chartData');

  constructor(
    @Optional() @Inject(REQUEST) private readonly request: Request,
    private readonly platformService: PlatformService,
    private readonly transferState: TransferState,
  ) {
    this.chartParamModel = new ChartParamModel();
    if (this.platformService.isServer()) {
      const defaultParams: ChartParam = {
        type: 'BarVerticalComponent',
      };
      const params: ApiChartParamData = Object.assign(
        {},
        defaultParams,
        this.request.query,
        this.request.body,
      ) as ApiChartParamData;
      this.chartParamModel = new ChartParamModel(params);
      this.transferState.set(
        this.chartParamStateKey,
        JSON.parse(JSON.stringify(this.chartParamModel)),
      );
    }

    if (this.platformService.isBrowser()) {
      const chartParam: ChartParam | undefined = this.transferState.get(
        this.chartParamStateKey,
        new ChartParamModel(),
      );
      if (chartParam) this.chartParamModel = new ChartParamModel(chartParam);
    }
  }

  getChartParam(): ChartParamModel {
    return this.chartParamModel;
  }
}
