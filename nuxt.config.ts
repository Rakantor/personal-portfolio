import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
    [
      '@nuxtjs/i18n',
      // { vueI18n: './i18n.config.ts' }
      // TODO: Revert to config file once the bug in 8.0.0-beta.11 has been fixed
      // https://github.com/nuxt-modules/i18n/issues/1990
      { vueI18n: {
        legacy: false,
        locale: 'en',
        messages: {
          en: {
            greeting: 'Hey. I\'m Manuel.',
            iuGamerApp: `An Android app designed to help a group of board game enthusiasts\
              better organize their regular evening game sessions.\
              Users will be reliably informed about the time and location of the next appointment.\
              They can suggest games, vote on suggested games, rate past appointments,\
              and communicate with each other via an integrated chat feature.`,
            iuQuizApp: 'An online quiz system that supports distance learning students at IU in solidifying their learning content in preparation for the exam. It enables students to cooperatively and collaboratively find answers to subject-related questions. The focus is particularly on working together and playing/learning together. Similar to the popular app Quizduel, students can, but do not have to, play against each other.',
            personalWebsite: 'My first portfolio website.',
            pmb: 'A 2D game inspired by the 2000s Pokémon games. Built from scratch! Features include animated battles (online multiplayer), overworld sprites, custom maps built with Tiled, game sound, 3 difficulty levels and so much more.',
            toriiJava: 'A Japanese vocabulary learning tool that harnesses the power of spaced repetition to make memorizing new words a breeze.',
            toriiWeb: `Version 2 of my Japanese vocabulary learning tool brings significant enhancements\
              over its predecessor. New features include offline functionality (thanks to utilizing IndexedDB),\
              an integrated dictionary for single-click word addition,\
              additional review methods for learned words,\
              a review forecast chart for planning study sessions,\
              and improved word search and statistics for better user insights.`
          },
          de: {
            greeting: 'Hey. Ich bin Manuel.',
            iuGamerApp: `Eine Android App, die einer Gruppe von Brettspielfans dabei helfen soll,\
              ihre regelmäßigen abendlichen Spieltermine besser zu organisieren.\
              Benutzer werden zuverlässig über Zeit & Ort des nächsten Termins informiert.\
              Sie können Spiele vorschlagen und über Vorschläge abstimmen, vergangene Termine bewerten\
              und sich über einen integrierten Chat gegenseitig Nachrichten zukommen lassen.`,
            iuQuizApp: 'Ein Online-Quizsystem, das Studierende des Fernstudiums der IU bei der Festigung der Lerninhalte zur Vorbereitung auf die Klausur unterstützt. Es ermöglicht Studierenden, kooperativ und kollaborativ Antworten zu fachlichen Fragen zu finden. Das miteinander bzw. das gemeinsame Spielen/Erarbeiten steht dabei besonders im Fokus. Ähnlich wie bei der populären App Quizduell kann, jedoch muss nicht gegeneinander gespielt werden.',
            personalWebsite: 'Meine erste Portfolio-Website.',
            pmb: 'A 2D game inspired by the 2000s Pokémon games. Built from scratch! Features animated battles (online multiplayer), overworld sprites, custom maps, sound, 3 difficulty levels and so much more.',
            toriiJava: 'DEU',
            toriiWeb: `Version 2 meiner Vokabeltrainer-App bringt bedeutende Verbesserungen\
              gegenüber seinem Vorgänger. Neue Funktionen umfassen Offline-Funktionalität (dank der Nutzung von IndexedDB),\
              ein integriertes Wörterbuch für das Hinzufügen neuer Wörter mit nur einem Klick,\
              zusätzliche Überprüfungsmethoden für gelernte Vokabeln,\
              ein Vorschau-Diagramm zur Planung von Lernsitzungen sowie\
              verbesserte Wortsuche und Statistiken.`
          }
        }
      } }
    ],
    // https://go.nuxtjs.dev/axios
    // ['@nuxtjs/axios', { proxyHeaders: false }],
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    }
  ]
})
