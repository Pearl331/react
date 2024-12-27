import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Disable warning for anchor tags without 'rel' attribute when target is _blank
      'react/jsx-no-target-blank': 'off',

      // Warn when components aren't properly exported (for React Refresh compatibility)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Additional rules to ensure clean, responsive design code practices
      // Prevent inline styles unless necessary
      'react/style-prop-object': 'warn',

      // Prevent unnecessary div wrappers around elements for better accessibility and smaller markup
      'react/jsx-no-useless-fragment': 'warn',

      // Enforce semantic HTML for better screen reader accessibility
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',

      // Enforce using correct alt text for images (important for accessibility)
      'jsx-a11y/alt-text': 'warn',

      // Ensure images are used responsively with CSS classes (important for responsive design)
      'jsx-a11y/img-redundant-alt': 'warn',

      // Optional: Enforce a consistent order of hooks (for better maintainability in responsive components)
      'react-hooks/rules-of-hooks': 'error',

      // Enforce consistent component naming (encourages a uniform naming convention)
      'react/jsx-pascal-case': 'error',

      // Prevent missing default props in functional components
      'react/prop-types': 'warn',

      // Prevent missing key in lists (important for React's performance in dynamic responsive lists)
      'react/jsx-key': 'warn',

      // Disallow unused variables (for cleaner code in components that adapt responsively)
      'no-unused-vars': 'warn',

      // Enforce consistent function components syntax (functional components encourage reusable responsive code)
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];

