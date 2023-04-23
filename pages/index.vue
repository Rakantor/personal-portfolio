<template>
  <v-row justify="center">
    <v-col cols="12">
      <span class="text-h4 text-md-h3 text-lg-h2 text-high-emphasis">
        {{ $t('greeting') }}
      </span>
    </v-col>
    <v-col cols="12" class="my-6">
      <p class="text-body-1 text-md-h6 text-medium-emphasis" style="max-width: 550px;">
        I'm a Software Developer based in Vienna, Austria.<br/>
        I develop various types of applications.
        Explore my <NuxtLink to="/portfolio">portfolio</NuxtLink> to view a showcase of my projects.
      </p>
    </v-col>
    <v-col cols="12">
      <v-btn
        variant="outlined"
        color="primary"
        prepend-icon="mdi-email-outline"
        :href="`mailto:<${$myEmail}>`"
      >
        Get in touch
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
