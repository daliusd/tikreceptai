/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
