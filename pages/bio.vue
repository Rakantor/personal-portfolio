<template>
  <v-row>
    <v-col cols="12">
      <span class="text-h4">About me</span>
    </v-col>
    <v-col cols="12">
      <span>
        Hey there! I'm Manuel, a software dev based in Vienna, Austria. I C.
        A year later, I continued to learn Java. I HTML and CSS
        full-stack web development in 2018.
      </span>
    </v-col>
    <v-col cols="12">
      <ul>
        <li v-for="(value, index) in languages" :key="index">{{ value }}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BioPage',
  data () {
    return {
      languages: ['Java', 'Android']
    }
  }
}
</script>