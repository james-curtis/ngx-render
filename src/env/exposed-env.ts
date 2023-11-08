export enum ExposedEnv {
  API_BASE = 'API_BASE',
  HOST_TYPE = 'HOSTTYPE',
  LANG = 'LANG',
}

export const exposedEnv: ExposedEnv[] = [...Object.values(ExposedEnv)];

export const defaultEnv: Record<ExposedEnv, string> = {
  [ExposedEnv.HOST_TYPE]: 'unknown',
  [ExposedEnv.LANG]: 'unknown',
  [ExposedEnv.API_BASE]: '//localhost:3000',
};
