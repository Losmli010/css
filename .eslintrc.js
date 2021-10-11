module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // prettier
    'prettier/prettier': 'error',
  },
}
