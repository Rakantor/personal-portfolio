<template>
  <v-dialog v-model="show" class="d-flex align-center justify-center">
    <v-carousel
      :model-value="index"
      :show-arrows="images.length > 1"
      hide-delimiters
    >
      <v-carousel-item v-for="image of images" :key="image"
        :src="image"
        class="ma-auto"
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
  })
}
</script>