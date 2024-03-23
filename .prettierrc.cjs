/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  htmlWhitespaceSensitivity: 'ignore',

  plugins: [require.resolve('prettier-plugin-astro')],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
