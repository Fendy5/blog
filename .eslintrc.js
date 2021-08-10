module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-debugger': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-console': 'off'
  }
}
