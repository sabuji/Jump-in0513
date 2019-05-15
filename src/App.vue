<template>
  <v-app>
    <v-toolbar dark class="cyan darken-3">
      <v-toolbar-side-icon @click="openSideMenu" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Jump in</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <SideNav/>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";

export default {
  components: {
    SideNav
  },

  data() {
    return {};
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "supervisor_account", title: "View Events", link: "/events" },
          { icon: "room", title: "Organize Events", link: "/event/new" },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    openSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    }
  }
};
</script>
