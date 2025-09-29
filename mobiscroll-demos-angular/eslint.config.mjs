import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@angular-eslint/prefer-inject': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'arrow-body-style': ['warn', 'as-needed'],
      'capitalized-comments': ['warn', 'always', { ignorePattern: 'drag,?$|theme,?$|locale,?$|localeImport' }],
      'import/no-named-as-default': 'off',
      'import/no-unresolved': 'off',
      'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
      'no-var': 'warn',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'warn',
      'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
    },
  },
);
