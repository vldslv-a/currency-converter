/** @type {import("prettier").Config} */
const config = {
  bracketSameLine: false,
  bracketSpacing: true,
  printWidth: 120,
  proseWrap: 'never',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.scss', '*.css'],
      options: {
        parser: 'scss',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
  ],
};

export default config;
