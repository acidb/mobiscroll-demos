module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import', 'promise'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'one-var': ['error', 'never'],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
  },
};
