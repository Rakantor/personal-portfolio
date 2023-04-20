import { createVuetify, ThemeDefinition  } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi'
import { brands } from '~/iconsets/brands'
// @ts-expect-error Missing type definitions
import colors from 'vuetify/lib/util/colors'

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0A192F',
    backgroundSecondary: '#112240',
    primary: '#00DC82',
    // primary: '#64FFDA',
    secondary: '#8892B0',
    "on-background": '#CCD6F6',
    "on-backgroundSecondary": '#CCD6F6',
    accent: colors.grey.darken3,
    // secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
  // Nuxt Default
  /* colors: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  }, */
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    defaults: {
      VCard: {
        elevation: 0,
      },
    },
    theme: {
      // customVariables: ['~/assets/variables.scss'],
      defaultTheme: 'myCustomDarkTheme',
      themes: {
        myCustomDarkTheme,
      }
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
        brands
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)

  // Define global variables
  nuxtApp.provide('myName', 'Manuel Veigel')
  nuxtApp.provide('myEmail', 'maveigel@gmail.com')
})