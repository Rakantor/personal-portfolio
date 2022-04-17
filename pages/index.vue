<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <span class="text-h3">Hi, my name is Manuel.</span>
    </v-col>
    <v-col cols="12">
      <span class="text-h6">I'm a Software Developer based in Vienna, Austria.<br/>I make all kind of applications.</span>
    </v-col>
    <v-col cols="12">
      <v-btn depressed outlined color="primary" href="mailto:rakantor.dev@gmail.com">
        <v-icon left>mdi-email-outline</v-icon>
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
