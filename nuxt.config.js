import { resolve } from 'path'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '流云辞',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#562fc7' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '周锋(Fendy)的个人博客，名曰：流云辞，分享生活、技术、音乐、视频等~ ' },
      { hid: 'keywords', name: 'keywords', content: '周锋,Fendy,个人博客,流云辞' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/_common.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/baidu',
    '@/plugins/svg-icon'
  ],

  loading: {
    color: 'white',
    height: '3px'
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  server: {
    port: 6080, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots'
  ],

  robots: {
    UserAgent: '*',
    Allow: '*'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // proxy: true,
    // prefix: '/dev-api',
    credentials: true
  },

  target: 'static',

  ssr: process.env.NODE_ENV === 'production',

  proxy: {
    '/dev-api': {
      target: 'http://127.0.0.1:7036',
      changeOrigin: true,
      pathRewrite: {
        '^/dev-api': ''
      }
    }
  },

  router: {
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
  },

  env: {
    BASE_URL: process.env.BASE_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/icons/svg')]

      // 添加loader规则
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [resolve(__dirname, 'assets/icons/svg')], // 将存放svg的目录加入到loader处理目录
        use: [{
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' }
        }]
      })
    },
    optimization: {
      runtimeChunk: 'single',
      minimize: undefined,
      minimizer: undefined,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        // name: undefined,
        minSize: 10000,
        maxSize: 250000,
        cacheGroups: {}
      }
    },
    analyze: true, // 使用webpack-bundle-analyzer来可视化包以及如何优化它们
    // vendor: ['element-ui'],
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    babel: {
      plugins: [
        ['component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  generate: {
    fallback: 'index.html'
  }
  // router: {
  //   base: process.env.NODE_ENV === 'production' ? './' : '/' // 使用 './' 主要是为了适配以相对路径打开的静态站点
  // }
}
