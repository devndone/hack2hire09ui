

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },

            {
                'name': 'mobile-web-app-capable',
                'content': 'yes'
            }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
                href: '//fonts.googleapis.com/icon?family=Material+Icons',
                rel: 'stylesheet'
            },
            {
                rel: "manifest",
                href: "manifest.json"
            },
            {
                rel: "icon",
                href: "logo.png",
                sizes:"165x32"
            }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  env: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  build: {
      vendor: ['axios'],
      // extend(config, options) {
      //     if (options.isClient && !options.dev) {
      //         const plugins = config.plugins
      //         plugins.push(
      //           new SWPrecacheWebpackPlugin({
      //   filename: 'sw.js',
      //   minify: true,
      //   staticFileGlobsIgnorePatterns: [/\.nuxt\//],
      //   staticFileGlobs: [
      //     'static/**/*' // Precache all static files by default
      //   ],
      //   forceDelete: true,
      //   runtimeCaching: [
      //     // Example with different handlers
      //     {
      //       handler: 'fastest',
      //       urlPattern: /[.](png|jpg|css)/
      //     },
      //     {
      //       handler: 'networkFirst',
      //       urlPattern: /^http.*/, //cache all files
      //       urlPattern: /^https.*/ //cache all files
      //     }
      //   ]
      // })
      //         )
      //         config.plugins = plugins
      //         return config
      //     }
      // }
  },
  plugins: [

  ]
}
