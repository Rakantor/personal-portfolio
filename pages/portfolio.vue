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
              color="on-surface"
              :href="`https://${project.repoUrl}`"
              target="_blank"
              class="link"
            />
            <v-btn
              v-if="project.projectUrl"
              variant="text"
              icon="mdi-open-in-new"
              density="comfortable"
              color="on-surface"
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
          <img v-for="t of project.tech" :key="tech[t].title"
            :src="generateBadgen(tech[t].title, tech[t].iconUrl)"
            :height="20"
            class="ma-1"
          />

          <!-- colored badges
          <img v-for="t of project.tech" :key="tech[t].title"
            :src="`https://badgen.net/badge/icon/${tech[t].title}?icon=${tech[t].iconUrl}${tech[t].color}&label`"
            :height="20"
            class="ma-1"
          />
          -->

          <!-- colored badges w/ links to brand websites
          <a v-for="t of project.tech" :key="tech[t].title"
            :href="`https://${tech[t].projectUrl}`"
            target="_blank"
          >
            <img v-for="t of project.tech" :key="tech[t].title"
              :src="`https://badgen.net/badge/icon/${tech[t].title}?icon=${tech[t].iconUrl}${tech[t].color}&label`"
              :height="20"
              class="ma-1"
            />
          </a>
          -->

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { badgen } from 'badgen'
import { siAndroid, siAmazonaws, siMicrosoftazure, siFirebase, siGithub,
  siHeroku, siCoffeescript, siYoutubegaming, siMysql, siNuxtdotjs, siPhp,
  siVuedotjs, siVuetify, siIbmwatson, siWordpress } from 'simple-icons'

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
        color: '3DDC84',
        iconUrl: siAndroid,
      },
      aws: {
        title: 'AWS',
        color: '232F3E',
        iconUrl: siAmazonaws,
      },
      azure: {
        title: 'Azure',
        color: '0078D4',
        iconUrl: siMicrosoftazure,
      },
      firebase: {
        title: 'Firebase',
        color: 'FFCA28',
        iconUrl: siFirebase,
      },
      ghpages: {
        title: 'GH Pages',
        color: '222222',
        iconUrl: siGithub,
      },
      heroku: {
        title: 'Heroku',
        color: '430098',
        iconUrl: siHeroku,
      },
      java: {
        title: 'Java',
        color: 'FF7800',
        iconUrl: siCoffeescript,
      },
      libgdx: {
        title: 'libGDX',
        color: '990000',
        iconUrl: siYoutubegaming,
      },
      mysql: {
        title: 'MySQL',
        color: '4479A1',
        iconUrl: siMysql,
      },
      nuxt2: {
        title: 'Nuxt 2',
        color: '00DC82',
        iconUrl: siNuxtdotjs,
      },
      nuxt3: {
        title: 'Nuxt 3',
        color: '00DC82',
        iconUrl: siNuxtdotjs,
      },
      php: {
        title: 'PHP',
        color: '777BB4',
        iconUrl: siPhp,
      },
      vue2: {
        title: 'Vue 2',
        color: '4FC08D',
        iconUrl: siVuedotjs,
      },
      vuetify2: {
        title: 'Vuetify 2',
        color: '1867C0',
        iconUrl: siVuetify,
      },
      vuetify3: {
        title: 'Vuetify 3',
        color: '1867C0',
        iconUrl: siVuetify,
      },
      watson: {
        title: 'Watson',
        color: 'BE95FF',
        iconUrl: siIbmwatson,
      },
      wordpress: {
        title: 'WordPress',
        color: '21759B',
        iconUrl: siWordpress,
      }
    },
    carouselIndex: []
  }),
  methods: {
    generateBadgen (label, iconUrl) {
      // const iconColor = iconUrl.hex
      const iconColor = 'FFFFFF'
      const iconSvg = iconUrl.svg.replace('<path ', `<path fill="#${iconColor}" `)
      const svg = badgen({
        label: '',
        status: label,
        // color: iconColor,
        color: this.$vuetify.theme.current.colors.backgroundTertiary.slice(1),
        style: 'classic',
        icon: `data:image/svg+xml;utf8,${encodeURIComponent(iconSvg)}`
      })

      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
    },
    showImageCarousel (images, carouselIndex) {
      this.$refs.imageCarousel.images = images.map(i => this.cdn+i)
      this.$refs.imageCarousel.index = carouselIndex
      this.$refs.imageCarousel.show = true
    }
  }
}
</script>

<style>
path {
    fill: #fff !IMPORTANT;
}
</style>