import {
  Component,
  Inject,
  OnInit,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { Request } from 'express';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-render';
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
  test: string | undefined;
  test2: string | undefined = 'asdf';
  choose = 'POST';

  constructor(
    @Optional() @Inject(REQUEST) protected req: Request,
    @Inject(PLATFORM_ID) protected platformId: NonNullable<unknown>,
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      console.log(`req`, this.req);
      this.test = this.req.method;
    }
  }
}
