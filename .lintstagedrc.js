/**
 * @type {import('@types/lint-staged').Config}
 */
module.exports = {
  '*.{vue,js,ts,jsx,tsx,vue,html}': ['eslint', 'prettier -c'],
  '*.scss': ['prettier -c'],
};
