<template>
  <v-row justify="center">
    <v-col cols="12">
      <span class="text-h4 text-md-h3 text-lg-h2 text-high-emphasis">
        {{ $t('greeting') }}
      </span>
    </v-col>
    <v-col cols="12" class="my-6">
      <i18n-t
        keypath="introduction"
        tag="p"
        class="text-body-1 text-md-h6 text-medium-emphasis"
        style="max-width: 550px;"
      >
        <template v-slot:portfolio>
          <NuxtLink to="/portfolio">{{ $t('portfolio') }}</NuxtLink>
        </template>
      </i18n-t>
    </v-col>
    <v-col cols="12">
      <v-btn
        variant="outlined"
        color="primary"
        prepend-icon="mdi-email-outline"
        :href="`mailto:<${$config.public.myEmail}>`"
      >
        {{ $t('getInTouch') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
definePageMeta({
  id: 1,
  pageTransition: {
    name: 'slide',
    mode: 'out-in'
  }
})

export default {
  name: 'IndexPage'
}
</script>
