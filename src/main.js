import jsdoc from 'eslint-plugin-jsdoc'
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'
import tailwind from 'eslint-plugin-tailwindcss'
import { NODE_RULES, REACT_RULES } from './rules.js'
import { defineConfig } from 'eslint/config'

/** @type {import("eslint").Linter.Config[]} */
export const base = defineConfig([
  jsdoc.configs['flat/recommended-error'],
  stylistic.configs.recommended,
  {
    name: 'javascript/recommended-rules',
    files: ['**/*.js'],
    plugins: {
      js,
      jsdoc,
    },
    extends: ['js/recommended'],
    rules: {
      'max-params': ['error', 4],
      'new-cap': ['error', { capIsNew: false }],
      ...NODE_RULES,
    },
  },
])

/** @type {import("eslint").Linter.Config[]} */
export const ignores = [
  {
    ignores: [
      '*.config.*',
      '**/*.d.ts',
      '**/*.min.js',
      'build/**',
      'coverage/**',
      'dist/**',
      'html/**',
    ],
  },
]

/** @type {import("eslint").Linter.Config[]} */
export const node = defineConfig([
  ...base,
  ...ignores,
])

/** @type {import("eslint").Linter.Config[]} */
export const react = defineConfig([
  ...base,
  tailwind.configs['flat/recommended'],
  {
    name: 'react-tailwind/recommended-rules',
    files: ['/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: REACT_RULES,
  },
  ...ignores,
])
