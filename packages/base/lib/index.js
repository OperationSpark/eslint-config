module.exports = {
  extends: [
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/node.js',
    './rules/style.js',
    './rules/es6.js',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.test.*'],
      rules: {
        'prefer-arrow-callback': 0,
      },
    },
  ],
};
