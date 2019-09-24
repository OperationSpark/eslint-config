module.exports = {
  extends: [
    '@operationspark/eslint-config-base',
    './rules/errors.js',
    './rules/best-practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/node.js',
    './rules/style.js',
    './rules/es6.js',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
};
