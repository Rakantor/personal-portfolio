<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h5 font-weight-medium">Some of my projects</span>
    </v-col>
    <v-col v-for="(project, index) of projects" :key="index" cols="12" md="6">
      <v-card color="backgroundSecondary">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>
        <v-card-title>
          <span v-if="project.projectUrl">
            <a :href="`https://${project.projectUrl}`" target="_blank" class="link">{{ project.title }}</a>
          </span>
          <span v-else>{{ project.title }}</span>
        </v-card-title>
        <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien justo, vehicula at rutrum sed, maximus nec ante. Fusce maximus nulla vel elit scelerisque, eget eleifend neque tincidunt. Cras malesuada ultrices massa ac tempor. Donec faucibus orci eu arcu condimentum, quis congue neque sollicitudin. Etiam vel consequat lectus. Cras vel metus id odio ultrices tincidunt. Sed vitae neque non eros molestie convallis eget non ligula. Nam ullamcorper dolor risus, in dapibus sapien pellentesque in. Praesent dapibus justo eu egestas sagittis. Nam vel ipsum mauris. In hendrerit odio a magna viverra, vehicula vehicula urna tempor. Vestibulum vel vestibulum lorem. Integer luctus nulla libero, egestas efficitur ex sagittis sed. In fermentum cursus eleifend.</v-card-text>
        <v-card-text class="text-caption">
          {{ project.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="project.repoUrl"
            icon="mdi-github"
            :href="`https://${project.repoUrl}`"
            target="_blank"
          />
          <v-btn
            v-if="project.projectUrl"
            icon="mdi-open-in-new"
            :href="`https://${project.projectUrl}`"
            target="_blank"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PortfolioComponent',
  data: () => ({
    projects: [
      {
        title: 'Torii SRS 2.0',
        subtitle: 'Progressive Web App',
        description: 'Vue.js Vuetify.js Chart.js MySQL PHP AWS Azure Watson Heroku',
        projectUrl: 'beta.torii-srs.com'
      },
      {
        title: 'Torii SRS 1.0',
        subtitle: 'Cross-platform desktop and mobile app',
        description: 'Java libGDX MySQL PHP AWS WordPress',
        projectUrl: 'torii-srs.com'
      },
      {
        title: 'IU Gamer App',
        subtitle: 'Android app',
        description: 'Android (Java) Firebase',
        repoUrl: 'github.com/Rakantor/iubh-gamer-app',
      },
      {
        title: 'IU Quiz App',
        subtitle: 'Nuxt.js Web App',
        description: 'Android (Java) Firebase',
        repoUrl: 'github.com/Rakantor/iu-quiz-app',
        projectUrl: 'iu-quiz-app.web.app'
      },
      {
        title: 'Menacing Blue',
        subtitle: '2000s Pokémon inspired Cross-platform 2D game',
        description: 'Java libGDX'
      },
      {
        title: 'Personal Portfolio Website',
        subtitle: 'The thing you\'re looking at right now',
        description: 'Nuxt.js Vuetify.js GitHub-Pages',
        repoUrl: 'github.com/Rakantor/personal-portfolio',
        projectUrl: 'mave.dev'
      }
    ]
  })
}
</script>

<style scoped>
.link {
  color: inherit;
  text-decoration: none;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.link:hover {
  color: var(--v-primary-base);
}
</style>