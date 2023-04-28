<template>
  <v-dialog v-model="show">
    <v-carousel
      :model-value="index"
      :show-arrows="images.length > 1"
      hide-delimiters
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