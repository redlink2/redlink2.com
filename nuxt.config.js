export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '~RL2~',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/coolsun.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'redlink2.com',
      lang: 'en',
      short_name: 'rl2',
      description: 'Redlink2\'s website',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#2d1932',
      theme_color: '#e01440',
      start_url: '/',
      icons: [
        {
          src: '/static/coolsun.ico',
          sizes: '512x512',
          type: 'image/ico'
        },
      ]
    }
  },

  axios: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
