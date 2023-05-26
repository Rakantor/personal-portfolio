import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      cdn: 'd29l6egdxvgg9c.cloudfront.net/',
      myName: 'Manuel Veigel',
      myEmail: 'maveigel@gmail.com',
    }
  },
  ssr: false,
  css: [
    'vuetify/styles',
    '~/assets/variables.scss'
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify'] // add the vuetify vite plugin
    }
  },
  build: {
    transpile: ['vuetify']
  },
  app: {
    head: {
      // titleTemplate: '%s | Home',
      title: 'Manuel Veigel',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' }
      ],
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    }
  ],
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
