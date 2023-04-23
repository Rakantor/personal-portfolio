<template>
  <v-app class="v-app-bg">
    <v-navigation-drawer
      :model-value="drawer"
      location="right"
      app
      color="backgroundSecondary"
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
          <v-list-item-title v-text="page.title" />
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
          color="backgroundSecondary"
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
        <v-btn :ripple="false" to="/">Home</v-btn>
        <v-btn :ripple="false" to="/bio">About</v-btn>
        <v-btn :ripple="false" to="/portfolio">Work</v-btn>
        <v-btn :ripple="false" :href="`mailto:<${$myEmail}>`">Contact</v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <v-container class="pa-md-16 my-16">
        <slot />
      </v-container>
    </v-main>
    <v-footer app absolute color="transparent">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center">
          <span class="text-caption">
            &copy; {{ new Date().getFullYear() }} {{ $myName }}
          </span>
        </v-col>
      </v-row>
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
    drawer: false,
    pages: [
      {
        icon: 'mdi-home',
        title: 'Home',
        url: '/',
      },
      {
        icon: 'mdi-text-account',
        title: 'About',
        url: '/bio',
      },
      {
        icon: 'mdi-briefcase',
        title: 'Work',
        url: '/portfolio',
      }
    ]
  })
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