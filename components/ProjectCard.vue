<template>
  <ImageCarousel ref="imageCarousel" />

  <!-- HORIZONTAL VIEW CARD -->
  <v-card v-if="view === 'horizontal' && $vuetify.display.smAndUp" class="page-content">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-card-text class="my-auto">
        <v-avatar size="200" rounded="lg">
          <v-carousel
            v-model="carouselIndex"
            :show-arrows="images.length > 1 ? 'hover' : false"
            hide-delimiters
            width="200"
            height="200"
          >
            <v-carousel-item v-for="image of images" :key="image"
              :src="`https://${$config.public.cdn}${image}`"
              cover
              @click="showImageCarousel"
            ></v-carousel-item>
          </v-carousel>
        </v-avatar>
      </v-card-text>
      <div class="d-flex flex-column" style="width: 100%;">
        <v-card-item>
          <span v-if="overline" class="text-overline text-primary">{{ $t(overline) }}</span>
          <v-card-title class="d-flex font-weight-bold">
            <span v-if="links.length > 0">
              <a :href="`https://${links[0].url}`" target="_blank" class="link">
                {{ title }}
              </a>
            </span>
            <span v-else>{{ title }}</span>
            <v-spacer></v-spacer>
            <v-btn
              v-for="link in [...links].reverse()" :key="link.url"
              variant="text"
              :icon="link.icon"
              density="comfortable"
              color="on-surface"
              :href="`https://${link.url}`"
              target="_blank"
              class="link"
            />
          </v-card-title>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        </v-card-item>
        <v-card-text>{{ $t(description) }}</v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="d-flex flex-row flex-wrap justify-left align-center">
          <img v-for="t of tech" :key="technologies[t].title"
            :src="generateBadgen(technologies[t].title, technologies[t].icon)"
            :height="20"
            class="ma-1"
          />
        </v-card-actions>
      </div>
    </div>
  </v-card>

  <!-- VERTICAL VIEW CARD -->
  <v-card v-else height="100%" class="d-flex flex-column">
    <v-carousel
      v-model="carouselIndex"
      :show-arrows="images.length > 1 ? 'hover' : false"
      :hide-delimiters="images.length <= 1"
      height="auto"
    >
      <v-carousel-item v-for="image of images" :key="image"
        :src="`https://${$config.public.cdn}${image}`"
        @click="showImageCarousel"
      ></v-carousel-item>
    </v-carousel>
    <v-card-item>
      <span v-if="overline" class="text-overline text-primary">{{ $t(overline) }}</span>
      <v-card-title class="d-flex font-weight-bold">
        <span v-if="links.length > 0">
          <a :href="`https://${links[0].url}`" target="_blank" class="link">
            {{ title }}
          </a>
        </span>
        <span v-else>{{ title }}</span>
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in [...links].reverse()" :key="link.url"
          variant="text"
          :icon="link.icon"
          density="comfortable"
          color="on-surface"
          :href="`https://${link.url}`"
          target="_blank"
          class="link"
        />
      </v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    </v-card-item>
    <v-card-text>{{ $t(description) }}</v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions class="d-flex flex-row flex-wrap justify-center align-center">
      <img v-for="t of tech" :key="technologies[t].title"
        :src="generateBadgen(technologies[t].title, technologies[t].icon)"
        :height="20"
        class="ma-1"
      />

      <!-- colored badges
      <img v-for="t of tech" :key="technologies[t].title"
        :src="`https://badgen.net/badge/icon/${technologies[t].title}?icon=${technologies[t].icon}${technologies[t].color}&label`"
        :height="20"
        class="ma-1"
      />
      -->

      <!-- colored badges w/ links to brand websites
      <a v-for="t of tech" :key="technologies[t].title"
        :href="`https://${technologies[t].projectUrl}`"
        target="_blank"
      >
        <img v-for="t of tech" :key="technologies[t].title"
          :src="`https://badgen.net/badge/icon/${technologies[t].title}?icon=${technologies[t].icon}${technologies[t].color}&label`"
          :height="20"
          class="ma-1"
        />
      </a>
      -->

    </v-card-actions>
  </v-card>
</template>

<script>
import { badgen } from 'badgen'
import { siAndroid, siAmazonaws, siMicrosoftazure, siFirebase, siGithub,
  siHeroku, siCoffeescript, siYoutubegaming, siMysql, siNuxtdotjs, siPhp,
  siJavascript, siVuedotjs, siVuetify, siIbmwatson, siWordpress, siTypescript } from 'simple-icons'

export default {
  name: 'PortfolioPage',
  props: {
    view: {
      type: String,
      required: true
    },
    title: String,
    subtitle: String,
    description: String,
    overline: String,
    tech: {
      type: Array,
      default: []
    },
    images: {
      type: Array,
      default: []
    },
    links: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    technologies: {
      android: { title: 'Android', color: '3DDC84', icon: siAndroid },
      aws: { title: 'AWS', color: '232F3E', icon: siAmazonaws },
      azure: { title: 'Azure', color: '0078D4', icon: siMicrosoftazure },
      firebase: { title: 'Firebase', color: 'FFCA28', icon: siFirebase },
      ghpages: { title: 'GH Pages', color: '222222', icon: siGithub },
      heroku: { title: 'Heroku', color: '430098', icon: siHeroku },
      java: { title: 'Java', color: 'FF7800', icon: siCoffeescript },
      js: { title: 'JavaScript', color: 'F7DF1E', icon: siJavascript },
      libgdx: { title: 'libGDX', color: '990000', icon: siYoutubegaming },
      mysql: { title: 'MySQL', color: '4479A1', icon: siMysql },
      nuxt: { title: 'Nuxt', color: '00DC82', icon: siNuxtdotjs },
      php: { title: 'PHP', color: '777BB4', icon: siPhp },
      ts: { title: 'TypeScript', color: '3178C6', icon: siTypescript },
      vue: { title: 'Vue', color: '4FC08D', icon: siVuedotjs },
      vuetify: { title: 'Vuetify', color: '1867C0', icon: siVuetify },
      watson: { title: 'Watson', color: 'BE95FF', icon: siIbmwatson },
      wordpress: { title: 'WordPress', color: '21759B', icon: siWordpress }
    },
    carouselIndex: []
  }),
  methods: {
    /*
     * https://github.com/badgen/badgen
     */
    generateBadgen (label, icon) {
      // const iconColor = icon.hex
      const iconColor = 'FFFFFF' // white
      const iconSvg = icon.svg.replace('<path ', `<path fill="#${iconColor}" `) // Change SVG icon color
      const svg = badgen({
        label: '',
        status: label,
        // color: iconColor,
        color: this.$vuetify.theme.current.colors.backgroundTertiary.slice(1), // Remove leading '#' from hex string
        style: 'classic', // Can be 'classic' or 'flat'
        icon: `data:image/svg+xml;utf8,${encodeURIComponent(iconSvg)}`
      })

      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
    },
    showImageCarousel () {
      this.$refs.imageCarousel.images = this.images.map(i => `https://${this.$config.public.cdn+i}`)
      this.$refs.imageCarousel.index = this.carouselIndex
      this.$refs.imageCarousel.show = true
    }
  }
}
</script>