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
    surface: '#112240',
    backgroundTertiary: '#134074',
    primary: '#00DC82',
    // primary: '#64FFDA',
    secondary: '#8892B0',
    "on-background": '#CCD6F6',
    "on-surface": '#CCD6F6',
  },
  variables: {
    'border-color': '#FFFFFF',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 1, // default: 0.87
    'medium-emphasis-opacity': 0.7, // default: 0.60
    'disabled-opacity': 0.38,
    'idle-opacity': 0.10,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#343434',
    'theme-on-code': '#CCCCCC',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    defaults: {
      VCard: {
        elevation: 0
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