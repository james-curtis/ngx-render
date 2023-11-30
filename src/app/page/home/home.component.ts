import { Component, Type, ViewEncapsulation } from '@angular/core';
import { PlatformService } from '../../service/platform/platform.service';
import { ChartsService } from '../../service/charts/charts.service';
import { ChartType, NgxOptions } from '../../interface/chart-param.interface';
import * as ngx from '@swimlane/ngx-charts';
import { BarVerticalComponent, BaseChartComponent } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  private readonly type: ChartType = 'BarVerticalComponent';
  component: Type<Component> = BarVerticalComponent as unknown as Type<Component>;
  options!: NgxOptions;
  externalCSS: SafeHtml;

  private curves: Record<string, shape.CurveFactoryLineOnly> = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear,
  };

  private componentMap: Map<string, Type<Component>> = new Map();

  constructor(
    private platformService: PlatformService,
    private chartsService: ChartsService,
    private sanitizer: DomSanitizer,
  ) {
    Object.entries(ngx).map(([name, comp]) => {
      const _comp = comp as any;
      if (!(_comp?.prototype instanceof BaseChartComponent)) return;
      this.componentMap.set(name, _comp);
    });

    const chartParam = this.chartsService.getChartParam();

    if ('curve' in chartParam.ngxOptions && String(chartParam.ngxOptions['curve']) in this.curves) {
      chartParam.ngxOptions['curve'] = this.curves[String(chartParam.ngxOptions['curve'])];
      chartParam.ngxOptions['curve'] = shape.curveBasis;
    }

    this.type = chartParam.type;
    this.options = Object.assign({}, chartParam.ngxOptions);
    this.externalCSS = sanitizer.bypassSecurityTrustHtml(
      `<style>${chartParam.externalCSS}</style>` || '',
    );
    if (!this.componentMap.has(this.type)) {
      throw new Error(`can not found ${this.type}`);
    }
    this.component = this.componentMap.get(this.type)!;
  }
}
