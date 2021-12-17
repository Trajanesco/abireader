module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 'off',
    'object-curly-spacing': 'off',
    semi: 'off',
    'no-eval': 'off',
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase' | 'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/no-unused-components': false,
    'standard/computed-property-even-spacing': 'off',
    endOfLine: 'auto',
    'no-return-await': 'off',
    'vue/require-v-for-key': false,
    'vue/no-unused-vars': false
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
