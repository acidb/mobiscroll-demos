/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['import'],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'capitalized-comments': [
      'warn',
      'always',
      { ignorePattern: 'theme,?$|locale,?$|localeImport' }
    ],
    'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'no-var': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
