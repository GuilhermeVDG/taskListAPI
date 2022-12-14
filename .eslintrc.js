module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelCase: 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    quotes: ['error', 'single'],
  },
};
