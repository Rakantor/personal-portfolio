<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h5 text-md-h4 text-high-emphasis">
        {{ $t('bioTitle') }}
      </span>
    </v-col>
    <v-col cols="12">
      <v-sheet color="transparent" class="text-medium-emphasis">
        <i18n-t keypath="bioBody" tag="p">
          <template v-slot:mmorpg>
            <NuxtLink :href="mmorpgWikiUrl" target="_blank">MMORPG</NuxtLink>
          </template>
          <template v-slot:htl>
            <NuxtLink :href="htlWikiUrl" target="_blank">HTL</NuxtLink>
          </template>
          <template v-slot:bi>
            <NuxtLink :href="biWikiUrl" target="_blank">{{ $t('bi') }}</NuxtLink>
          </template>
          <template v-slot:yearsOfExp>
            {{ yearsOfExp }}
          </template>
        </i18n-t>
        <br/>
        <p>{{ $t('bioSubtitle') }}</p>
      </v-sheet>
    </v-col>
    <v-col v-for="set, ind in sets" :key="ind" cols="12">
      <v-card>
        <v-card-item>
          <v-card-title>{{ $t(set.title) }}</v-card-title>
        </v-card-item>
        <v-card-text class="text-center">
          <v-row>
            <v-col v-for="(v, i) in set.data" :key="i" cols="12">
              <v-row justify="center">
                <v-col cols="auto" v-for="(value, index) in v" :key="index">
                  <v-btn
                    variant="text"
                    :size="brandIconSize(value.emphasis)"
                    color="primary"
                    class="mx-1"
                    :href="`https://${value.url}`"
                    target="_blank"
                  >
                    <v-icon :icon="value.icon" :size="brandIconSize(value.emphasis) - 10"></v-icon>
                  </v-btn>
                  <span class="text-overline text-primary d-flex flex-column ma-0 pa-0">
                    {{ value.title }}
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
definePageMeta({
  id: 2,
  pageTransition: {
    name: 'slide',
    mode: 'out-in'
  }
})

import _groupBy from 'lodash-es/groupBy'

export default {
  name: 'BioPage',
  data: () => ({
    mmorpgWikiUrl: 'https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game',
    htlWikiUrl: 'https://en.wikipedia.org/wiki/H%C3%B6here_Technische_Lehranstalt',
    biWikiUrl: 'https://en.wikipedia.org/wiki/Business_informatics',
    languages: [
      { title: 'Java', icon: 'mdi-language-java', url: 'java.com', emphasis: 'high' },
      { title: 'C/C++', icon: 'mdi-language-cpp', url: 'isocpp.org', emphasis: 'low' },
      { title: 'Python', icon: 'mdi-language-python', url: 'python.org', emphasis: 'low' },
      { title: 'JavaScript (ES6+)', icon: 'mdi-language-javascript', url: 'javascript.com', emphasis: 'high' },
      { title: 'TypeScript', icon: 'mdi-language-typescript', url: 'typescriptlang.org/', emphasis: 'low' },
      { title: 'HTML', icon: 'mdi-language-html5', url: 'html.spec.whatwg.org/multipage', emphasis: 'medium' },
      { title: 'CSS', icon: 'mdi-language-css3', url: 'w3.org/Style/CSS', emphasis: 'medium' },
      { title: 'PHP', icon: 'mdi-language-php', url: 'php.net', emphasis: 'medium' },
      { title: 'SQL', icon: 'mdi-database', url: 'iso.org/standard/63555.html', emphasis: 'medium' },
      { title: 'Lua', icon: 'mdi-language-lua', url: 'lua.org', emphasis: 'medium' }
    ],
    frameworks: [
      { title: 'Android', icon: 'mdi-android', url: 'android.com', emphasis: 'medium' },
      { title: 'Vue.js', icon: 'mdi-vuejs', url: 'vuejs.org', emphasis: 'high' },
      { title: 'Nuxt', icon: 'mdi-nuxt', url: 'nuxt.com', emphasis: 'high' },
      { title: 'Vuetify', icon: 'mdi-vuetify', url: 'vuetifyjs.com', emphasis: 'high' },
      { title: 'Bootstrap', icon: 'mdi-bootstrap', url: 'bootstrap-vue.org', emphasis: 'low' },
      { title: 'libGDX', icon: 'mdi-alpha-l-box-outline', url: 'libgdx.com', emphasis: 'low' }
    ],
    tech: [
      { title: 'Amazon Web Services', icon: 'mdi-aws', url: 'aws.amazon.com', emphasis: 'high' },
      { title: 'Firebase', icon: 'mdi-firebase', url: 'firebase.google.com', emphasis: 'high' },
      { title: 'Azure', icon: 'mdi-microsoft-azure', url: 'azure.microsoft.com', emphasis: 'low' },
      { title: 'Heroku', icon: 'brands:heroku', url: 'heroku.com', emphasis: 'low' },
      { title: 'WordPress', icon: 'mdi-wordpress', url: 'wordpress.com', emphasis: 'low' },
      { title: 'Unity', icon: 'mdi-unity', url: 'unity.com', emphasis: 'low' },
      { title: 'Unreal Engine', icon: 'mdi-unreal', url: 'unrealengine.com', emphasis: 'low' }
    ],
    os: [
      { title: 'Windows', icon: 'mdi-microsoft-windows', url: 'microsoft.com/windows', emphasis: 'medium' },
      { title: 'macOS', icon: 'brands:apple', url: 'apple.com/macos', emphasis: 'medium' },
      { title: 'Linux Mint', icon: 'mdi-linux-mint', url: 'linuxmint.com', emphasis: 'medium' },
      { title: 'Fedora', icon: 'mdi-fedora', url: 'getfedora.org', emphasis: 'medium' },
      { title: 'Arch Linux', icon: 'mdi-arch', url: 'archlinux.org', emphasis: 'low' },
      { title: 'Ubuntu', icon: 'mdi-ubuntu', url: 'ubuntu.com', emphasis: 'low' },
      { title: 'iOS', icon: 'mdi-apple-ios', url: 'apple.com/ios', emphasis: 'low' },
      { title: 'Android', icon: 'mdi-android', url: 'android.com', emphasis: 'low' },
    ]
  }),
  computed: {
    sets () {
      const languages = _groupBy([...this.languages, ...this.frameworks], e => e.emphasis)
      // const frameworks = _groupBy(this.frameworks, e => e.emphasis)
      const tech = _groupBy(this.tech, e => e.emphasis)
      const os = _groupBy(this.os, e => e.emphasis)
      
      function compareEmphasis (x, y) {
        const map = { low: 1, medium: 2, high: 3 }
        return map[y] - map[x]
      }

      return [
        {
          title: 'languagesFrameworks',
          data: Object.keys(languages).sort(compareEmphasis).map(e => languages[e])
        },
        {
          title: 'toolsPlatforms',
          data: Object.keys(tech).sort(compareEmphasis).map(e => tech[e])
        },
        {
          title: 'os',
          data: Object.keys(os).sort(compareEmphasis).map(e => os[e])
        }
      ]
    },
    yearsOfExp () {
      // startingYear = The year I started my first truly personal project (predecessor of Menacing Blue).
      // Fun fact: I used Notepad++ and javac in cmd for coding rather than an IDE for like the first 6-12 months.
      const startingYear = 2011
      const currentYear = new Date().getFullYear()
      return currentYear - startingYear
    }
  },
  methods: {
    brandIconSize (emphasis) {
      const large = this.$vuetify.display.smAndDown ? 64 : 96
      const medium = this.$vuetify.display.smAndDown ? 48 : 64
      const small = this.$vuetify.display.smAndDown ? 32 : 48

      switch (emphasis) {
        case 'low': return small
        case 'medium': return medium
        default: return large
      }
    }
  }
}
</script>