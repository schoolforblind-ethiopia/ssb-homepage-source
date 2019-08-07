module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'html'],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'prefer-template': 2,
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'only-multiline']
  }
}
