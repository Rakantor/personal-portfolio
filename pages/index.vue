<template>
  <v-row justify="center">
    <v-col cols="12">
      <span class="text-h3">{{ $t('greeting') }}</span>
    </v-col>
    <v-col cols="12" class="my-6">
      <p class="text-h6" style="max-width: 600px;">
        I'm a Software Developer based in Vienna, Austria.<br/>
        I develop various types of applications.
        Explore my portfolio to view a showcase of my projects ✌️
      </p>
    </v-col>
    <v-col cols="12">
      <v-btn
        depressed
        outlined
        color="primary"
        prepend-icon="mdi-email-outline"
        :href="`mailto:<${$myEmail}>`"
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
