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
    // https://go.nuxtjs.dev/axios
    // ['@nuxtjs/axios', { proxyHeaders: false }],
    '@nuxtjs/i18n',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    }
  ],
  i18n: {
    // { vueI18n: './i18n.config.ts' }
    // TODO: Revert to config file once the bug in 8.0.0-beta.11 has been fixed
    // https://github.com/nuxt-modules/i18n/issues/1990
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          bi: 'BI', // Business Informatics
          bioBody: 'My interest in programming was sparked in 2007 when I began tinkering with SQL\
            in an attempt to setup a private server for my favorite {mmorpg} (it was a success!)\
            Eager to dive deeper into the world of coding, I attended a {htl}\
            specializing in IT in 2009, where I learned C, Java, HTML and CSS.\
            Some years later, I pursued a degree in {bi} with a specialization\
            in Web and App development. I have acquired the majority of my knowledge through self-teaching\
            while working on personal projects over the past ~15 years.',
          bioTitle: 'My Journey as a Developer',
          bioSubtitle: 'Here\'s some of the tech that I\'ve worked with before:',
          getInTouch: 'Get in touch',
          greeting: 'Hey. I\'m Manuel.',
          headerAbout: 'About',
          headerContact: 'Contact',
          headerHome: 'Home',
          headerWork: 'Projects',
          introduction: 'I\'m a Software Developer based in Vienna, Austria.\
            I develop various types of applications.\
            Explore my {portfolio} to view a showcase of my projects.',
          imprint: 'Imprint',
          iuGamerApp: 'An Android app designed to help a group of board game enthusiasts\
            better organize their regular evening game sessions.\
            Users will be reliably informed about the time and location of the next appointment.\
            They can suggest games, vote on suggested games, rate past appointments,\
            and communicate with each other via an integrated chat feature.',
          iuQuizApp: 'An online quiz system that supports distance learning students at IU\
            in solidifying their learning content in preparation for the exam.\
            It enables students to cooperatively and collaboratively find answers to subject-related questions.\
            The focus is particularly on working together and playing/learning together.\
            Similar to the popular app Quizduel, students can, but do not have to, play against each other.',
          lang: 'Languages',
          languagesFrameworks: 'Languages & Frameworks',
          os: 'Operating Systems',
          personalWebsite: 'My first portfolio website.',
          pmb: 'A 2D game inspired by the 2000s Pokémon games. Built from scratch!\
            Features include animated NPCs, objects and battles (including online multiplayer),\
            custom maps built in Tiled, game sound, 3 difficulty levels and so much more.',
          portfolio: 'portfolio',
          portfolioTitle: 'Some of my projects',
          toolsPlatforms: 'Tools & Platforms',
          toriiJava: 'A Japanese vocabulary learning tool that harnesses the power of spaced repetition\
            to make memorizing new words a breeze. It combines a straightforward interface with robust features.\
            Designed for both casual learners and those preparing for the Japanese Language Proficiency Test (JLPT),\
            Torii offers specialized vocabulary lists and review methods.\
            Key features include audio reviews, font randomization, progress tracking,\
            and automatic cloud synchronization.',
          toriiWeb: 'Version 2 of my Japanese vocabulary learning tool brings significant enhancements\
            over its predecessor. New features include offline functionality (thanks to utilizing IndexedDB),\
            an integrated dictionary for single-click word addition,\
            additional review methods for learned words,\
            a review forecast chart for planning study sessions,\
            and improved word search and statistics for better user insights.'
        },
        de: {
          bi: 'WI', // Wirtschaftsinformatik
          bioBody: 'Den Einstieg in die Programmierung habe ich 2007 gemacht, als ich mich mit SQL beschäftigt habe,\
            in dem Versuch, einen Privatserver für mein Lieblings-{mmorpg} aufzusetzen (erfolgreich!)\
            Nach dem Gymnasium habe ich mich 2009 dazu entschlossen, eine auf IT spezialisierte {htl} zu besuchen,\
            wo ich die Grundlagen in C, Java, HTML and CSS gelernt habe.\
            Ein paar Jahre später habe ich {bi} studiert - Wahlpflichtfächer Web- und App-Development.\
            Den Großteil meines Wissens habe ich mir im Zuge persönlicher Projekte in den letzten ~15 Jahren\
            autodidaktisch angeeignet.',
          bioTitle: 'Mein Werdegang als Developer',
          bioSubtitle: 'Einige der Technologien, mit denen ich gearbeitet habe:',
          getInTouch: 'Kontaktieren',
          greeting: 'Hey. Ich bin Manuel.',
          headerAbout: 'Über mich',
          headerContact: 'Kontakt',
          headerHome: 'Home',
          headerWork: 'Projekte',
          introduction: 'Ich bin ein Software Developer aus Wien, Österreich.\
            Ich entwickle ganz unterschiedliche Applikationen.\
            Die wichtigsten Projekte habe ich in meinem {portfolio} aufgelistet.',
          imprint: 'Impressum',
          iuGamerApp: `Eine Android App, die einer Gruppe von Brettspielfans dabei helfen soll,\
            ihre regelmäßigen abendlichen Spieltermine besser zu organisieren.\
            Benutzer werden zuverlässig über Zeit & Ort des nächsten Termins informiert.\
            Sie können Spiele vorschlagen und über Vorschläge abstimmen, vergangene Termine bewerten\
            und sich über einen integrierten Chat gegenseitig Nachrichten zukommen lassen.`,
          iuQuizApp: 'Ein Online-Quizsystem, das Fernstudenten der IU bei\
            der Festigung der Lerninhalte zur Vorbereitung auf die Klausur unterstützt.\
            Es ermöglicht Studierenden, kooperativ und kollaborativ Antworten zu fachlichen Fragen zu finden.\
            Das miteinander bzw. das gemeinsame Spielen/Erarbeiten steht dabei besonders im Fokus.\
            Ähnlich wie bei der populären App Quizduell kann, jedoch muss nicht gegeneinander gespielt werden.',
          lang: 'Sprachen',
          languagesFrameworks: 'Sprachen & Frameworks',
          os: 'Betriebssysteme',
          personalWebsite: 'Meine erste Portfolio-Website.',
          pmb: 'Ein 2D Game, inspiriert von den Pokémon Game Boy Spielen der 2000er.\
            Funktionen umfassen animierte NPCs, Objekte und Kämpfe (inklusive Online-Multiplayer),\
            einzigartige Maps erstellt mit Tiled, Sound, 3 Schwierigkeitsstufen und jede Menge mehr.',
          portfolio: 'Portfolio',
          portfolioTitle: 'Ausgewählte Projekte',
          toolsPlatforms: 'Tools & Plattformen',
          toriiJava: 'Eine japanische Vokabeltrainer-App, die die Spaced Repetition Lernmethode nutzt, um\
            den Lernprozess neuer Wörter so effektiv und effizient wie möglich zu gestalten.\
            Die App verbindet eine simple Benutzeroberfläche mit leistungsstarken Funktionen.\
            Torii eignet sich dank spezialisierter Vokabellisten und verschiedenen Wiederholungsmethoden\
            sowohl für Casual-Learners als auch zur Vorbereitung auf den\
            Japanese Language Proficiency Test (JLPT).\
            Zu den wichtigsten Funktionen zählen Audio-Reviews, Font-Randomization, Progress-Tracking,\
            und automatische Cloud-Synchronisation.',
          toriiWeb: `Version 2 meiner Vokabeltrainer-App bringt bedeutende Verbesserungen\
            gegenüber seinem Vorgänger. Neue Funktionen umfassen Offline-Funktionalität (dank der Nutzung von IndexedDB),\
            ein integriertes Wörterbuch für das Hinzufügen neuer Wörter mit nur einem Klick,\
            zusätzliche Überprüfungsmethoden für gelernte Vokabeln,\
            ein Vorschau-Diagramm zur Planung von Lernsessions sowie\
            verbesserte Wortsuche und Statistiken.`
        }
      }
    }
  }
})
