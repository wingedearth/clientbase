module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: 'none'
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 1
  }
};
