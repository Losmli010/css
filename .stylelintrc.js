module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties'
  ],
  rules: {
    'at-rule-no-unknown': null,
//    "comment-empty-line-before": null,
//    "function-name-case": ["lower", { "ignoreFunctions": ["/colorPalette/"] }],
//    "no-invalid-double-slash-comments": null,
//    "no-descending-specificity": null,
//    "no-invalid-position-at-import-rule": null,
//    "declaration-empty-line-before": null
  }
}
