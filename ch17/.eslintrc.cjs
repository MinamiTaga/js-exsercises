module.exports = {
  extends: [
    'eslint:recommended',
    'google',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'require-jsdoc': 'off',
  },
  ignorePatterns: [
    'ex01/format_sample.js',
    'ex05/dist/main.js',
    'ex06/dist/main.js',
  ],
};
