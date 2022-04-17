<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h4">About me</span>
    </v-col>
    <v-col cols="12">
      <span>
        Hello there! I'm Manuel, a software dev based in Vienna, Austria. I C.
        A year later, I continued to learn Java. I HTML and CSS
        full-stack web development in 2018.
      </span>
    </v-col>
    <v-col cols="12">
      <v-chip v-for="(value, index) in languages" :key="index" outlined color="primary" class="mx-1">{{ value }}</v-chip>
    </v-col>
    <v-col cols="12">
      <v-chip v-for="(value, index) in tech" :key="index" outlined class="mx-1">{{ value }}</v-chip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BioPage',
  data: () => ({
    languages: ['Java', 'Android', 'JavaScript (ES6+)', 'Vue.js', 'Nuxt.js', 'Vuetify', 'BootstrapVue', 'PHP', 'SQL'],
    tech: ['AWS', 'Heroku', 'WordPress', 'Firebase']
  })
}
</script>