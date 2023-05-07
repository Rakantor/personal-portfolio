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
      height="90vh"
    >
      <v-carousel-item v-for="image of images" :key="image"
        :src="image"
        class="img-height"
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

<style scoped lang="scss">
  @use 'vuetify/settings';

  .img-height {
    height: calc(90vh - settings.$carousel-controls-size);
  }
</style>
