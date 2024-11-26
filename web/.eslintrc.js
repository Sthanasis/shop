module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'boundaries'],
  settings: {
    'boundaries/include': ['src/**/*.tsx', 'src/**/*.ts'],
    'boundaries/elements': [
      {
        type: 'shared',
        pattern: ['src/shared', 'src/tailwind'],
        mode: 'folder',
      },
      {
        type: 'feature',
        capture: ['family', 'featureName'],
        pattern: ['src/features'],
        mode: 'folder',
      },
      {
        type: 'app',
        capture: ['app', 'fileName'],
        pattern: ['src/app/**/*'],
        mode: 'full',
      },
    ],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'boundaries/no-unknown': ['error'],
    'boundaries/no-unknown-files': ['error'],
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        message: '${file.type} is not allowed to import ${dependency.type}',
        rules: [
          {
            from: ['shared'],
            allow: ['shared'],
          },
          {
            from: ['feature'],
            allow: ['shared', ['feature', { family: '${from.family}' }]],
          },
          {
            from: ['app'],
            allow: ['shared', 'feature', ['app', { fileName: '*.css' }]],
          },
        ],
      },
    ],
  },
};
