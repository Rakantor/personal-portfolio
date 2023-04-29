<template>
  <v-dialog v-model="show">
    <v-btn
      position="absolute"
      location="top right"
      icon="mdi-close"
      @click.prevent="show = false"
      style="z-index: 5000;"
    ></v-btn>
    <v-carousel
      :model-value="index"
      :show-arrows="images.length > 1"
      class="ma-auto"
      :height="carouselHeight"
    >
      <v-carousel-item v-for="image of images" :key="image"
        :src="image"
      ></v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data: () => ({
    show: false,
    images: [],
    index: 0
  }),
  computed: {
    carouselHeight () {
      return window.innerHeight * 0.9
    }
  }
}
</script>