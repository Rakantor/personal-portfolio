<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h5 font-weight-medium">Some of my projects</span>
    </v-col>
    <v-col v-for="(project, index) of projects" :key="index" cols="12" md="6">
      <v-card color="backgroundSecondary">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-title>{{ project.title }}</v-card-title>
        <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        <v-card-text>Desktop/Android application written in Java</v-card-text>
        <v-card-text class="text-caption">
          {{ project.info }}
        </v-card-text>
        <v-card-actions>
          <v-btn depressed outlined color="primary">Visit Project Website</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PortfolioComponent',
  data () {
    return {
      projects: [
        {
          title: 'Torii SRS 2.0',
          subtitle: 'Progressive Web App',
          info: 'Vue.js Vuetify.js Chart.js MySQL PHP AWS Azure Watson Heroku'
        },
        {
          title: 'Torii SRS 1.0',
          subtitle: 'Cross-platform desktop and mobile app',
          info: 'Java libGDX MySQL PHP AWS WordPress'
        },
        {
          title: 'IU Gamer App',
          subtitle: 'Cross-platform desktop and mobile app',
          info: 'Android (Java) Firebase'
        },
        {
          title: 'Menacing Blue',
          subtitle: '2000s Pokémon inspired Cross-platform 2D game',
          info: 'Java libGDX'
        },
        {
          title: 'Personal Portfolio Website',
          subtitle: 'The thing you\'re looking at right now',
          info: 'Nuxt.js Vuetify.js Github-Pages'
        }
      ]
    }
  }
}
</script>