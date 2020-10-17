<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon 
          color="white"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.link"
          :to="{path: item.link}"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    menu: [
      {title: 'Home Page', link: '/', icon: 'mdi-home' },
      {title: 'About Page', link: '/About', icon: 'mdi-heart' },
      {title: 'Simple Table Page', link: '/Table', icon: 'mdi-heart' },
      {title: 'People', link: '/People', icon: 'mdi-heart' },
      {title: 'Sandra', link: '/Sandra', icon: 'mdi-heart' },
      {title: 'EditList 🤠', link: '/EditList', icon: 'mdi-heart' },
      {title: 'CrudTable 🤠', link: '/CrudTable', icon: 'mdi-heart' },
    ]
  }),
};
</script>
