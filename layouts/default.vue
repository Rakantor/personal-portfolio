<template>
  <v-app class="v-app-bg">
    <v-navigation-drawer
      :model-value="drawer"
      location="right"
      app
      disable-resize-watcher
    >
      <v-list nav :lines="false">
        <v-list-item
          v-for="(page, i) in pages"
          :key="i"
          :to="page.url"
          active-color="primary"
          router
          exact
        >
          <template v-slot:prepend>
            <v-icon :icon="page.icon"></v-icon>
          </template>
          <v-list-item-title v-text="$t(page.title)" />
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn
            block
            outlined
            color="primary"
            prepend-icon="mdi-email-outline"
            :href="`mailto:<${$myEmail}>`"
          >
            Contact
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar app color="background" class="px-md-10 py-md-4">
      <template v-slot:prepend>
        <v-avatar
          size="48"
          color="surface"
          style="cursor: pointer"
          @click.native="$router.push('/')"
        >
          <img src="~/assets/avatar_transparent.png" width="55" />
        </v-avatar>
      </template>
      <!-- v-app-bar-title class="text-subtitle-1" v-text="$myName" /-->
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="smAndDown"
        @click.stop="drawer = !drawer"
      />
      <v-btn-toggle v-else :model-value="0" mandatory variant="plain" selected-class="link-active">
        <v-btn :ripple="false" to="/">{{ $t('headerHome') }}</v-btn>
        <v-btn :ripple="false" to="/bio">{{ $t('headerAbout') }}</v-btn>
        <v-btn :ripple="false" to="/portfolio">{{ $t('headerWork') }}</v-btn>
        <v-btn :ripple="false" :href="`mailto:<${$myEmail}>`">{{ $t('headerContact') }}</v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <v-container class="pa-md-16 my-16">
        <slot />
      </v-container>
    </v-main>
    <v-footer
      app absolute
      color="transparent"
      style="border-top: 1px solid rgba(var(--v-theme-on-surface), 0.1);"
    >
      <v-container class="d-flex py-0 my-0">
        <v-row no-gutters>
          <v-col cols="4" class="text-center my-auto">
            <v-btn
              variant="plain"
              size="x-small"
              density="compact"
              color="on-surface"
              :ripple="false"
              class="link"
              to="/imprint"
            >
              {{ $t('imprint') }}
            </v-btn>
          </v-col>
          <v-col cols="4" class="text-center my-auto">
            <span class="text-caption">
              &copy; {{ new Date().getFullYear() }} {{ $myName }}
            </span>
          </v-col>
          <v-col cols="4" class="text-center my-auto">
            <v-btn
              variant="plain"
              icon="mdi-github"
              density="comfortable"
              color="on-surface"
              :ripple="false"
              class="link"
              :href="projectUrl"
              target="_blank"
            />
            <v-menu location="top right" :close-on-content-click="false">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="plain"
                  icon="mdi-translate"
                  density="comfortable"
                  color="on-surface"
                  :ripple="false"
                  class="link"
                />
              </template>
              <v-list nav min-width="150">
                <v-list-subheader>{{ $t('lang').toUpperCase() }}</v-list-subheader>
                <v-list-item
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :value="locale"
                  :active="locale.code == $i18n.locale"
                  active-color="primary"
                >
                  <v-list-item-title @click="changeLocale(locale.code)">
                    {{ locale.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'DefaultLayout',
  setup () {
    const { smAndDown } = useDisplay()
    return { smAndDown }
  },
  data: () => ({
    projectUrl: 'https://github.com/Rakantor/personal-portfolio',
    availableLocales: [
      { code: 'en', name: 'English' },
      { code: 'de', name: 'Deutsch' }
    ],
    pages: [
      {
        icon: 'mdi-home',
        title: 'headerHome',
        url: '/',
      },
      {
        icon: 'mdi-text-account',
        title: 'headerAbout',
        url: '/bio',
      },
      {
        icon: 'mdi-briefcase',
        title: 'headerWork',
        url: '/portfolio',
      }
    ],
    drawer: false,
  }),
  methods: {
    changeLocale (langCode) {
      this.$i18n.setLocale(langCode)
      localStorage.setItem('lang', langCode)
    }
  },
  created () {
    const locale = localStorage.getItem('lang') || this.$i18n.locale
    if (locale != this.$i18n.locale) this.$i18n.setLocale(locale)
  }
}
</script>

<style scoped lang="scss">
.v-app-bg {
  background: rgb(var(--v-theme-background))
}
.link-active {
  color: rgb(var(--v-theme-primary)) !important;
}
.v-btn--variant-plain {
  color: rgb(var(--v-theme-on-background));
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }

  &:focus {
    color: rgb(var(--v-theme-primary));
  }
}
</style>