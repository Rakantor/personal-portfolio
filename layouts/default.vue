<template>
  <v-app dark class="v-app-bg">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      right
      app
      color="backgroundSecondary"
      
    >
      <v-list nav :lines="false">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          active-color="primary"
          router
          exact
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn
            block
            outlined
            color="primary"
            prepend-icon="mdi-email-outline"
            :href="`mailto:${myName}<${myEmail}>`"
          >
            Contact
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed flat app color="transparent">
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
      <v-app-bar-title class="text-subtitle-1" v-text="myName" />
      <v-spacer />
      <v-app-bar-nav-icon v-if="smAndDown" @click.stop="drawer = !drawer" />
      <div v-else>
        <v-btn plain active-class="link-active" to="/">Home</v-btn>
        <v-btn plain active-class="link-active" to="/bio">About</v-btn>
        <v-btn plain active-class="link-active" to="/portfolio">Work</v-btn>
        <v-btn plain active-class="link-active" :href="`mailto:${myName}<${myEmail}>`">Contact</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="my-16">
        <slot />
      </v-container>
    </v-main>
    <v-footer app absolute color="transparent">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center">
          <v-divider></v-divider>
          <span class="text-caption">
            &copy; {{ new Date().getFullYear() }} | {{ myName }}
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
    miniVariant: false,
    selectedItem: 0,
    myName: 'Manuel',
    myEmail: 'rakantor.dev@gmail.com',
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-text-account',
        title: 'About',
        to: '/bio',
      },
      {
        icon: 'mdi-briefcase',
        title: 'Work',
        to: '/portfolio',
      }
    ]
  })
}
</script>

<style scoped>
.v-app-bg {
  background: rgb(var(--v-theme-background))
}
.link-active {
  color: var(--v-primary-base);
}
.v-btn--plain:deep(.v-btn__content) {
  color: inherit;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-btn--plain:hover {
  color: var(--v-primary-base);
}
.v-btn--plain:focus {
  color: var(--v-primary-base);
}
</style>