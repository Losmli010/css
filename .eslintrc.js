module.exports = {
  extends: [
    'airbnb',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
