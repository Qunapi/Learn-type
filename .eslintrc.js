module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'no-unused-vars': 0,
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'jsx-quotes': 0,
    'import/extensions': 0,
  },
};
