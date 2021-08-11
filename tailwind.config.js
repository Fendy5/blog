module.exports = {
  theme: {
    screens: {
      desktop: { min: '1280px' },
      laptop: { min: '751px' },
      tablet: { max: '750px' }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
