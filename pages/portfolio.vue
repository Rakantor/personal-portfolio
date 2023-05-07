<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet
          width="100%"
          color="transparent"
          class="d-flex flex-no-wrap justify-space-between"
          :class="view === 'horizontal' ? 'page-content' : ''"
        >
          <span class="text-h5 font-weight-medium">
            {{ $t('portfolioTitle') }}
          </span>
          <v-btn-toggle
            v-model="selectedViewIndex"
            mandatory
            density="compact"
            color="primary"
          >
            <v-btn>
              <v-icon icon="mdi-view-sequential" color="white"></v-icon>
            </v-btn>
            <v-btn>
              <v-icon icon="mdi-view-column" color="white"></v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-sheet>
      </v-col>
      <v-col v-for="(project, index) of projects" :key="index"
        :cols="viewCols.cols"
        :sm="viewCols.sm"
        :md="viewCols.md"
        :lg="viewCols.lg"
        :xl="viewCols.xl"
      >
        <ProjectCard
          :view="view"
          :title="project.title"
          :subtitle="project.subtitle"
          :description="project.description"
          :tech="project.tech"
          :images="project.images"
          :project-url="project.projectUrl"
          :repo-url="project.repoUrl"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
definePageMeta({
  id: 3,
  pageTransition: {
    name: 'slide',
    mode: 'out-in'
  }
})

export default {
  name: 'PortfolioPage',
  data: () => ({
    selectedViewIndex: 0,
    views: {
      horizontal: 0,
      vertical: 1
    },
    projects: [
      {
        title: 'Torii SRS (v2-beta)',
        subtitle: 'Progressive Web App (SPA)',
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
        subtitle: 'Cross-Platform App',
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
        subtitle: 'Web App (SPA)',
        description: 'iuQuizApp',
        tech: ['nuxt2', 'vuetify2', 'firebase'],
        repoUrl: 'github.com/Rakantor/iu-quiz-app',
        projectUrl: 'iu-quiz-app.web.app',
        images: ['iu-quiz-app-2.jpg']
      },
      {
        title: 'Menacing Blue',
        subtitle: 'Cross-Platform App',
        description: 'pmb',
        tech: ['java', 'libgdx'],
        images: ['pmb-6.png', 'pmb-1.png', 'pmb-2.png', 'pmb-3.png', 'pmb-4.png', 'pmb-5.png', 'pmb-7.jpg']
      },
      {
        title: 'Personal Website',
        subtitle: 'Web App (SPA)',
        description: 'personalWebsite',
        tech: ['nuxt3', 'vuetify3', 'ghpages'],
        repoUrl: 'github.com/Rakantor/personal-portfolio',
        projectUrl: 'mave.dev',
        images: ['personal-website-1.jpg'],
      },
      {
        title: 'IU Gamer App',
        subtitle: 'Android App',
        description: 'iuGamerApp',
        tech: ['java', 'android', 'firebase'],
        repoUrl: 'github.com/Rakantor/iubh-gamer-app',
        images: ['iu-gamer-app-1.jpg', 'iu-gamer-app-2.jpg']
      }
    ]
  }),
  computed: {
    viewCols () {
      const horizontal = {
        cols: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
      }
      const vertical = {
        cols: 12,
        sm: 6,
        md: 6,
        lg: 4,
        xl: 4
      }
      return this.view === 'horizontal' ? horizontal : vertical
    },
    view () {
      return this.selectedViewIndex === this.views.horizontal && this.$vuetify.display.smAndUp ? 'horizontal' : 'vertical'
    }
  }
}
</script>
