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
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,   // 单引号替换双引号
        semi: false,    // 去掉分号结尾
        printWidth: 80,  // 换行
      }
    ]
  },
}
