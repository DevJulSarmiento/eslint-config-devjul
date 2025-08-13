import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';
import globals from 'globals';
import stylisticJs from '@stylistic/js';
import tailwind from '@stylistic/tailwind';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { NODE_RULES, REACT_RULES } from './rules';

/** @type {import("eslint").Linter.Config[]} */
export const base = [
  jsdoc.configs['flat/recommended-error'],
  {
    name: "javascript/recommended-rules",
    files: ["**/*.js"],
    plugins: {
      js,
      jsdoc,
      '@stylistic/js': stylisticJs,
    },
    extends: ["js/recommended"],
    rules: {
      "max-params": ["error", 4],
      "new-cap": ["error", { "capIsNew": false }],
      ...NODE_RULES
    }
  },
]

/** @type {import("eslint").Linter.Config[]} */
export const ignores = [
  {
    ignores: [
      "*.config.*",
      "**/*.d.ts",
      "**/*.min.js",
      "build/**",
      "coverage/**",
      "dist/**",
      "html/**",
    ]
  }
]

/** @type {import("eslint").Linter.Config[]} */
export const node = [
  ...base,
  ...ignores
]

/** @type {import("eslint").Linter.Config[]} */
export const react = [
  ...base,
  tailwind.configs["flat/recommended"],
  {
    name: "react-tailwind/recommended-rules",
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
  ...ignores
]