import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-render';
  platformId: any = Inject(PLATFORM_ID);
  view: [number, number] = [700, 300];
  data = [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de',
      },
      label: 'Germany',
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us',
      },
      label: 'United States',
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr',
      },
      label: 'France',
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk',
      },
      label: 'United Kingdom',
    },
    {
      name: 'Spain',
      value: 33000,
      extra: {
        code: 'es',
      },
      label: 'Spain',
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it',
      },
      label: 'Italy',
    },
  ];

  params: Record<string, string> | undefined;

  @Optional()
  @Inject(REQUEST)
  private readonly request!: Request | null;

  constructor() {
    if (isPlatformServer(this.platformId)) {
      console.log(this.request?.url);
    }
  }
}
