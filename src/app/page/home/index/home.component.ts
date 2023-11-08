import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../../services/platform/platform.service';
import { EnvService } from '../../../services/env/env.service';
import { ExposedEnv } from '../../../../env/exposed-env';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    private readonly platformService: PlatformService,
    private readonly envService: EnvService,
  ) {}

  ngOnInit(): void {
    if (this.platformService.isBrowser()) {
      console.log(this.envService.getEnv(ExposedEnv.LANG));
    }
  }
}
