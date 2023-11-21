# NgxRender

## api
`http://localhost:4000/`

```ts
import * as ngx from '@swimlane/ngx-charts';

export type ChartType = keyof typeof ngx;

export type NgxOptions = Record<string, unknown>;

export interface ChartParam {
    type: ChartType;
    externalCSS?: string;
    ngxOptions?: Partial<NgxOptions>;
}

// 请求 JSON 定义
export type ApiChartParamData = Partial<ChartParam>;

// 默认参数
const defaultParam: ApiChartParamData = {
    type: ChartType = 'BarVerticalComponent',
    externalCSS: string = '',
    ngxOptions: NgxOptions = {
        results: [
            {
                name: 'Germany',
                value: 40632,
                extra: {
                    code: 'de',
                },
            },
            {
                name: 'United States',
                value: 50000,
                extra: {
                    code: 'us',
                },
            },
            {
                name: 'France',
                value: 36745,
                extra: {
                    code: 'fr',
                },
            },
            {
                name: 'United Kingdom',
                value: 36240,
                extra: {
                    code: 'uk',
                },
            },
            {
                name: 'Spain',
                value: 33000,
                extra: {
                    code: 'es',
                },
            },
            {
                name: 'Italy',
                value: 35800,
                extra: {
                    code: 'it',
                },
            },
        ],
        showGridLines: true,
        showLegend: true,
        showXAxisLabel: true,
        showYAxisLabel: true,
        xAxisLabel: 'xAxisLabel',
        yAxisLabel: 'yAxisLabel',
        xAxis: true,
        yAxis: true,
        legend: true,
        view: [700, 300],
        animations: false,
    }
}
```

