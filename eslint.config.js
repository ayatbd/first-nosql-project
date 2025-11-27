import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    ignores: ['.node_modules/*', '.dist/*'],
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);
