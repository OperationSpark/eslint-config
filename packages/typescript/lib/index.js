module.exports = {
  extends: [
    '@operationspark/eslint-config-dev',
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/node.js',
    './rules/style.js',
    './rules/es6.js',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    //   },
    // },
    // 'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     mjs: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],


    // 'react/jsx-filename-extension': ['error', {
    //   extensions: ['.jsx', '.tsx'],
    // }],
  }
};
