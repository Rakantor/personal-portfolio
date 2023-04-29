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
                    :size="getButtonSize(value.level)"
                    color="primary"
                    class="mx-1"
                    :href="`https://${value.url}`"
                    target="_blank"
                  >
                    <v-icon :icon="value.icon" :size="getButtonSize(value.level) - 10"></v-icon>
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
import _groupBy from 'lodash-es/groupBy'

export default {
  name: 'BioPage',
  data: () => ({
    mmorpgWikiUrl: 'https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game',
    htlWikiUrl: 'https://en.wikipedia.org/wiki/H%C3%B6here_Technische_Lehranstalt',
    biWikiUrl: 'https://en.wikipedia.org/wiki/Business_informatics',
    languages: [
      { title: 'Java', icon: 'mdi-language-java', url: 'java.com', level: 3 },
      { title: 'C/C++', icon: 'mdi-language-cpp', url: 'isocpp.org', level: 1 },
      { title: 'Python', icon: 'mdi-language-python', url: 'python.org', level: 1 },
      { title: 'JavaScript (ES6+)', icon: 'mdi-language-javascript', url: 'javascript.com', level: 3 },
      { title: 'TypeScript', icon: 'mdi-language-typescript', url: 'typescriptlang.org/', level: 1 },
      { title: 'HTML', icon: 'mdi-language-html5', url: 'html.spec.whatwg.org/multipage', level: 2 },
      { title: 'CSS', icon: 'mdi-language-css3', url: 'w3.org/Style/CSS', level: 2 },
      { title: 'PHP', icon: 'mdi-language-php', url: 'php.net', level: 2 },
      { title: 'SQL', icon: 'mdi-database', url: 'iso.org/standard/63555.html', level: 2 },
      { title: 'Lua', icon: 'mdi-language-lua', url: 'lua.org', level: 2 }
    ],
    frameworks: [
      { title: 'Android', icon: 'mdi-android', url: 'android.com', level: 2 },
      { title: 'Vue.js', icon: 'mdi-vuejs', url: 'vuejs.org', level: 3 },
      { title: 'Nuxt', icon: 'mdi-nuxt', url: 'nuxt.com', level: 3 },
      { title: 'Vuetify', icon: 'mdi-vuetify', url: 'vuetifyjs.com', level: 3 },
      { title: 'Bootstrap', icon: 'mdi-bootstrap', url: 'bootstrap-vue.org', level: 1 },
      { title: 'libGDX', icon: 'mdi-alpha-l-box-outline', url: 'libgdx.com', level: 1 }
    ],
    tech: [
      { title: 'Amazon Web Services', icon: 'mdi-aws', url: 'aws.amazon.com', level: 3 },
      { title: 'Firebase', icon: 'mdi-firebase', url: 'firebase.google.com', level: 3 },
      { title: 'Azure', icon: 'mdi-microsoft-azure', url: 'azure.microsoft.com', level: 1 },
      { title: 'Heroku', icon: 'brands:heroku', url: 'heroku.com', level: 1 },
      { title: 'WordPress', icon: 'mdi-wordpress', url: 'wordpress.com', level: 1 },
      { title: 'Unity', icon: 'mdi-unity', url: 'unity.com', level: 1 },
      { title: 'Unreal Engine', icon: 'mdi-unreal', url: 'unrealengine.com', level: 1 }
    ],
    os: [
      { title: 'Windows', icon: 'mdi-microsoft-windows', url: 'microsoft.com/windows', level: 3 },
      { title: 'Apple macOS', icon: 'brands:apple', url: 'apple.com/macos', level: 3 },
      { title: 'Linux Mint', icon: 'mdi-linux-mint', url: 'linuxmint.com', level: 3 },
      { title: 'Fedora Workstation', icon: 'mdi-fedora', url: 'getfedora.org', level: 3 },
      { title: 'Arch Linux', icon: 'mdi-arch', url: 'archlinux.org', level: 1 },
      { title: 'Ubuntu', icon: 'mdi-ubuntu', url: 'ubuntu.com', level: 1 },
      { title: 'Apple iOS', icon: 'mdi-apple-ios', url: 'apple.com/ios', level: 1 },
      { title: 'Android', icon: 'mdi-android', url: 'android.com', level: 1 },
    ]
  }),
  computed: {
    sets () {
      const languages = _groupBy([...this.languages, ...this.frameworks], e => e.level)
      // const frameworks = _groupBy(this.frameworks, e => e.level)
      const tech = _groupBy(this.tech, e => e.level)
      const os = _groupBy(this.os, e => e.level)

      return [
        {
          title: 'languagesFrameworks',
          data: Object.keys(languages).sort().reverse().map(e => languages[e])
        },
        {
          title: 'toolsPlatforms',
          data: Object.keys(tech).sort().reverse().map(e => tech[e])
        },
        {
          title: 'os',
          data: Object.keys(os).sort().reverse().map(e => os[e])
        }
      ]
    }
  },
  methods: {
    getButtonSize (level) {
      const large = this.$vuetify.display.smAndDown ? 64 : 96
      const medium = this.$vuetify.display.smAndDown ? 48 : 64
      const small = this.$vuetify.display.smAndDown ? 32 : 48

      switch (level) {
        case 1: return small
        case 2: return medium
        default: return large
      }
    }
  }
}
</script>