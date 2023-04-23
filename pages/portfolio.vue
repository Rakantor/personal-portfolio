<template>
  <ImageCarousel ref="imageCarousel" />
  <v-row>
    <v-col cols="12">
      <span class="text-h5 font-weight-medium">Some of my projects</span>
    </v-col>
    <v-col v-for="(project, index) of projects" :key="index" cols="12" lg="4" md="6">
      <v-card height="100%" class="d-flex flex-column">
        <v-carousel
          v-model="carouselIndex[index]"
          :show-arrows="project.images.length > 1 ? 'hover' : false"
          :hide-delimiters="project.images.length <= 1"
          hide-delimiter-background
          height="auto"
        >
          <v-carousel-item v-for="image of project.images" :key="image"
            :src="`${cdn}${image}`"
            @click="showImageCarousel(project.images, carouselIndex[index])"
          ></v-carousel-item>
        </v-carousel>
        <v-card-item>
          <v-card-title class="d-flex">
            <span>{{ project.title }}</span>
            <v-spacer></v-spacer>
            <v-btn
              v-if="project.repoUrl"
              variant="text"
              icon="mdi-github"
              density="comfortable"
              color="on-backgroundSecondary"
              :href="`https://${project.repoUrl}`"
              target="_blank"
              class="link"
            />
            <v-btn
              v-if="project.projectUrl"
              variant="text"
              icon="mdi-open-in-new"
              density="comfortable"
              color="on-backgroundSecondary"
              :href="`https://${project.projectUrl}`"
              target="_blank"
              class="link"
            />
          </v-card-title>
          <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        </v-card-item>
        <v-spacer></v-spacer>
        <v-card-text>{{ $t(project.description) }}</v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="d-flex flex-row flex-wrap justify-center align-center">
          <!--a v-for="t of project.tech" :key="tech[t].title"
            :href="`https://${tech[t].projectUrl}`"
            target="_blank"
          >
            <img
              :src="`https://badgen.net/badge/icon/${tech[t].title}?icon=${tech[t].iconUrl}`"
              :height="20"
              class="mx-1 mb-1"
            />
          </a-->
          <img v-for="t of project.tech" :key="tech[t].title"
            :src="`https://badgen.net/badge/icon/${tech[t].title}?icon=${tech[t].iconUrl}`"
            :height="20"
            class="ma-1"
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
    cdn: 'https://d29l6egdxvgg9c.cloudfront.net/',
    projects: [
    {
        title: 'Torii SRS (v2-beta)',
        subtitle: 'Progressive Web App',
        description: 'toriiWeb',
        tech: ['vue2', 'vuetify2', 'mysql', 'php', 'aws', 'azure', 'watson', 'heroku'],
        projectUrl: 'beta.torii-srs.com',
        images: [
          'torii-v2-01.jpg', 'torii-v2-03.jpg', 'torii-v2-04.jpg',
          'torii-v2-05.jpg', 'torii-v2-06.jpg', 'torii-v2-07.jpg',
          'torii-v2-08.jpg', 'torii-v2-09.jpg', 'torii-v2-10.jpg'
        ]
      },
      {
        title: 'Torii SRS (v1)',
        subtitle: 'Cross-platform app',
        description: 'toriiJava',
        tech: ['java', 'libgdx', 'mysql', 'php', 'aws', 'wordpress'],
        projectUrl: 'torii-srs.com',
        images: [
          'torii-v1-1.jpg', 'torii-v1-2.png', 'torii-v1-3.png',
          'torii-v1-4.png', 'torii-v1-5.png', 'torii-v1-6.png'
        ]
      },
      {
        title: 'IU Quiz App',
        subtitle: 'Web App',
        description: 'iuQuizApp',
        tech: ['nuxt2', 'vuetify2', 'firebase'],
        repoUrl: 'github.com/Rakantor/iu-quiz-app',
        projectUrl: 'iu-quiz-app.web.app',
        images: ['iu-quiz-app-2.jpg']
      },
      {
        title: 'Menacing Blue',
        subtitle: 'Cross-platform app',
        description: 'pmb',
        tech: ['java', 'libgdx'],
        images: ['pmb-6.png', 'pmb-1.png', 'pmb-2.png', 'pmb-3.png', 'pmb-4.png', 'pmb-5.png', 'pmb-7.jpg']
      },
      {
        title: 'Personal Website',
        subtitle: 'Web App',
        description: 'personalWebsite',
        tech: ['nuxt3', 'vuetify3', 'ghpages'],
        repoUrl: 'github.com/Rakantor/personal-portfolio',
        projectUrl: 'mave.dev',
        images: ['personal-website-1.jpg']
      },
      {
        title: 'IU Gamer App',
        subtitle: 'Android app',
        description: 'iuGamerApp',
        tech: ['android', 'firebase'],
        repoUrl: 'github.com/Rakantor/iubh-gamer-app',
        images: []
      }
    ],
    tech: {
      android: {
        title: 'Android',
        iconUrl: 'https://cdn.simpleicons.org/android&label&color=3DDC84',
      },
      aws: {
        title: 'AWS',
        iconUrl: 'https://cdn.simpleicons.org/amazonaws&label&color=232F3E',
      },
      azure: {
        title: 'Azure',
        iconUrl: 'https://cdn.simpleicons.org/microsoftazure&label&color=0078D4',
      },
      firebase: {
        title: 'Firebase',
        iconUrl: 'https://cdn.simpleicons.org/firebase&label&color=FFCA28',
      },
      ghpages: {
        title: 'GH Pages',
        iconUrl: 'https://cdn.simpleicons.org/github&label&color=222222',
      },
      heroku: {
        title: 'Heroku',
        iconUrl: 'https://cdn.simpleicons.org/heroku&label&color=430098',
      },
      java: {
        title: 'Java',
        iconUrl: 'https://cdn.simpleicons.org/coffeescript&label&color=FF7800',
      },
      libgdx: {
        title: 'libGDX',
        iconUrl: 'https://cdn.simpleicons.org/youtubegaming&label&color=990000',
      },
      mysql: {
        title: 'MySQL',
        iconUrl: 'https://cdn.simpleicons.org/mysql&label&color=4479A1',
      },
      nuxt2: {
        title: 'Nuxt 2',
        iconUrl: 'https://cdn.simpleicons.org/nuxtdotjs&label&color=00DC82',
      },
      nuxt3: {
        title: 'Nuxt 3',
        iconUrl: 'https://cdn.simpleicons.org/nuxtdotjs&label&color=00DC82',
      },
      php: {
        title: 'PHP',
        iconUrl: 'https://cdn.simpleicons.org/php&label&color=777BB4',
      },
      vue2: {
        title: 'Vue 2',
        iconUrl: 'https://cdn.simpleicons.org/vuedotjs&label&color=4FC08D',
      },
      vuetify2: {
        title: 'Vuetify 2',
        iconUrl: 'https://cdn.simpleicons.org/vuetify&label&color=1867C0',
      },
      vuetify3: {
        title: 'Vuetify 3',
        iconUrl: 'https://cdn.simpleicons.org/vuetify&label&color=1867C0',
      },
      watson: {
        title: 'Watson',
        iconUrl: 'https://cdn.simpleicons.org/ibmwatson&label&color=BE95FF',
      },
      wordpress: {
        title: 'WordPress',
        iconUrl: 'https://cdn.simpleicons.org/wordpress&label&color=21759B',
      }
    },
    carouselIndex: []
  }),
  methods: {
    showImageCarousel (images, carouselIndex) {
      this.$refs.imageCarousel.images = images.map(i => this.cdn+i)
      this.$refs.imageCarousel.index = carouselIndex
      this.$refs.imageCarousel.show = true
    }
  }
}
</script>
