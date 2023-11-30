import { Inject, Injectable, makeStateKey, Optional, StateKey, TransferState } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { PlatformService } from '../platform/platform.service';
import { ChartParamModel } from '../../model/chart-param.model';
import { ApiChartParamData, ChartParam } from '../../interface/chart-param.interface';
import { parse, stringify } from 'superjson';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  private readonly chartParamModel: ChartParamModel;
  private readonly chartParamStateKey: StateKey<ChartParam> = makeStateKey<ChartParam>('chartData');

  constructor(
    @Optional() @Inject(REQUEST) private readonly request: Request,
    private readonly platformService: PlatformService,
    private readonly transferState: TransferState,
  ) {
    this.chartParamModel = new ChartParamModel();
    if (this.platformService.isServer()) {
      const params: ApiChartParamData = parse(
        JSON.stringify(this.request.body) || '{}',
        // stringify(this.request.body) || '{}', // debug api
      ) as ApiChartParamData;
      this.chartParamModel = new ChartParamModel(params);
      this.transferState.set(this.chartParamStateKey, JSON.parse(stringify(this.chartParamModel)));
    }

    if (this.platformService.isBrowser()) {
      let chartParam: ChartParam | undefined = this.transferState.get(
        this.chartParamStateKey,
        parse(stringify(new ChartParamModel())),
      );
      chartParam = parse<ChartParam>(JSON.stringify(chartParam));
      if (chartParam) this.chartParamModel = new ChartParamModel(chartParam);
    }
  }

  getChartParam(): ChartParamModel {
    return this.chartParamModel;
  }
}
