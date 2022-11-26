<template>
  <v-row justify="center">
    <v-col cols="12">
      <span class="text-h3">Hi, my name is Manuel.</span>
    </v-col>
    <v-col cols="12">
      <span class="text-h6">
        I'm a Software Developer based in Vienna, Austria.<br/>
        I make all kind of applications.
      </span>
    </v-col>
    <v-col cols="12">
      <v-btn
        depressed
        outlined
        color="primary"
        prepend-icon="mdi-email-outline"
        href="mailto:rakantor.dev@gmail.com"
      >
        Contact me
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
