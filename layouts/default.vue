<template>
  <v-app dark :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      right
      app
      color="backgroundSecondary"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn block outlined color="primary" :href="`mailto:${myEmail}`">
            Contact
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar fixed flat app color="transparent">
      <v-avatar size="48" color="backgroundSecondary" class="mr-3" style="cursor: pointer" @click.native="$router.push('/')">
        <img
          src="@/assets/avatar_transparent.png"
          alt="Manuel"
        >
      </v-avatar>
      <v-toolbar-title class="text-subtitle-1" v-text="myName" />
      <v-spacer />
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
      <div v-else>
        <v-btn plain active-class="link-active" to="/">Home</v-btn>
        <v-btn plain active-class="link-active" to="/bio">About</v-btn>
        <v-btn plain active-class="link-active" to="/portfolio">Work</v-btn>
        <v-btn plain active-class="link-active" :href="`mailto:${myEmail}`">Contact</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="my-16">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute color="transparent">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center">
          <v-divider></v-divider>
          <span class="text-caption">&copy; {{ new Date().getFullYear() }} | {{ myName }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
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
      ],
      miniVariant: false,
      myName: 'Rakantor',
      myEmail: 'rakantor.dev@gmail.com'
    }
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
.link-active {
  color: var(--v-primary-base);
}
.v-btn--plain:hover {
  color: var(--v-primary-base);
}
</style>