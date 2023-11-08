import {
  Injectable,
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/core';
import { PlatformService } from '../platform/platform.service';
import { defaultEnv, ExposedEnv, exposedEnv } from '../../../env/exposed-env';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  private readonly transferKey: StateKey<Record<string, string>> =
    makeStateKey<Record<string, string>>('envVars');
  private readonly envs: Record<string, string | undefined> = {};

  constructor(
    private platformService: PlatformService,
    private transferState: TransferState,
  ) {
    if (this.platformService.isServer()) {
      exposedEnv.map((e) => (this.envs[e] = process.env[e]));

      this.transferState.set(this.transferKey, this.envs);
    }

    if (this.platformService.isBrowser()) {
      this.envs = this.transferState.get(this.transferKey, {});
    }
  }

  getEnv(key: ExposedEnv): string {
    return Object.assign({}, defaultEnv, this.envs)[key];
  }
}
