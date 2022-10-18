<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h4">About me</span>
    </v-col>
    <v-col cols="12">
      <span>
        Hello there! I'm Manuel, a software dev based in Vienna, Austria. I C.
        A year later, I continued to learn Java. I HTML and CSS
        full-stack web development in 2018.
      </span>
    </v-col>
    <v-col v-for="set, ind in sets" :key="ind" cols="12">
      <v-tooltip v-for="(value, index) in set" :key="index" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            :small="value.level == 1"
            :large="value.level == 2"
            :x-large="value.level >= 3"
            icon
            class="mx-1"
            :href="`https://${value.url}`"
            target="_blank"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon 
              color="primary"
              :large="value.level == 2"
              :x-large="value.level >= 3"
            >
              {{ value.icon }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ value.title }}</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
import _groupBy from 'lodash-es/groupBy'

export default {
  name: 'BioPage',
  data: () => ({
    languages: [
      { title: 'Java', icon: 'mdi-language-java', url: 'java.com', level: 3 },
      { title: 'Android', icon: 'mdi-android', url: 'android.com', level: 3 },
      { title: 'C', icon: 'mdi-language-cpp', url: 'isocpp.org', level: 2 },
      { title: 'Python', icon: 'mdi-language-python', url: 'python.org', level: 1 },
      { title: 'JavaScript (ES6+)', icon: 'mdi-language-javascript', url: 'javascript.com', level: 3 },
      { title: 'Vue.js', icon: 'mdi-vuejs', url: 'vuejs.org', level: 3 },
      { title: 'Nuxt.js', icon: 'mdi-nuxt', url: 'nuxtjs.org', level: 3 },
      { title: 'Lua', icon: 'mdi-language-lua', url: 'lua.org', level: 2 },
      { title: 'HTML', icon: 'mdi-language-html5', url: 'html.spec.whatwg.org/multipage', level: 2 },
      { title: 'CSS', icon: 'mdi-language-css3', url: 'w3.org/Style/CSS', level: 2 },
      { title: 'PHP', icon: 'mdi-language-php', url: 'php.net', level: 2 },
      { title: 'SQL', icon: 'mdi-database', url: 'iso.org/standard/63555.html', level: 2 }
    ],
    frameworks: [
      { title: 'Vuetify', icon: 'mdi-vuetify', url: 'vuetifyjs.com', level: 3 },
      { title: 'BootstrapVue', icon: 'mdi-bootstrap', url: 'bootstrap-vue.org', level: 2 }
    ],
    tech: [
      { title: 'Amazon Web Services', icon: 'mdi-aws', url: 'aws.amazon.com', level: 3 },
      { title: 'Google Firebase', icon: 'mdi-firebase', url: 'firebase.google.com', level: 3 },
      { title: 'Microsoft Azure', icon: 'mdi-microsoft-azure', url: 'azure.microsoft.com', level: 1 },
      { title: 'Heroku', icon: 'mdi-alpha-h-box-outline', url: 'heroku.com', level: 1 },
      { title: 'WordPress', icon: 'mdi-wordpress', url: 'wordpress.com', level: 1 },
      { title: 'Unity', icon: 'mdi-unity', url: 'unity.com', level: 1 },
      { title: 'Unreal Engine', icon: 'mdi-unreal', url: 'unrealengine.com', level: 1 }
    ],
    os: [
      { title: 'Microsoft Windows', icon: 'mdi-microsoft-windows', url: 'microsoft.com/windows', level: 1 },
      { title: 'Linux Mint', icon: 'mdi-linux-mint', url: 'linuxmint.com', level: 1 },
      { title: 'Ubuntu', icon: 'mdi-ubuntu', url: 'ubuntu.com', level: 1 },
      { title: 'Fedora Workstation', icon: 'mdi-fedora', url: 'getfedora.org', level: 1 },
      { title: 'macOS', icon: 'mdi-apple-finder', url: 'apple.com/macos', level: 1 },
    ]
  }),
  computed: {
    sets () {
      const set = _groupBy(this.skills, e => e.level)
      return Object.keys(set).sort().reverse().map(e => set[e])
    },
    skills () {
      return [...this.languages, ...this.frameworks, ...this.tech, ...this.os]
    }
  }
}
</script>