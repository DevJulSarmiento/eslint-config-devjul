import js from '@eslint/js'

export const NODE_RULES = {
  ...js.configs.recommended.rules,
  'complexity': ['error', { max: 6, variant: 'modified' }],
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    },
  ],
  'no-useless-catch': 'error',

  // JSDoc
  'jsdoc/check-alignment': 'warn',
  'jsdoc/check-param-names': 'error',
  'jsdoc/check-tag-names': 'error',
  'jsdoc/check-types': 'warn',
  'jsdoc/require-example': [
    'error',
    {
      contexts: [
        'FunctionDeclaration',
        'MethodDefinition',
        'ClassDeclaration',
        'ArrowFunctionExpression',
        'FunctionExpression',
      ],
    },
  ],
  'jsdoc/no-defaults': 'off',
  'jsdoc/require-param': 'error',
  'jsdoc/require-param-description': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-returns': 'error',
  'jsdoc/require-returns-description': 'error',
  'jsdoc/require-returns-type': 'error',
}

export const REACT_RULES = {

}
