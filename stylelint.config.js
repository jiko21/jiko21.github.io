module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 2,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content'
        ]
      }
    ],
    'unit-whitelist': ['em', 'rem', '%', 's', 'vh', 'vw', 'px']
  }
}
