<template>
  <!-- <v-layout wrap> -->
  <v-navigation-drawer width="250px" v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://avatars2.githubusercontent.com/u/1363954?s=460&v=4">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Kazuya Kojima</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-layout> -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "supervisor_account", title: "View Events", link: "/events" },
        { icon: "room", title: "Organize Events", link: "/event/new" },
        { icon: "person", title: "Profile", link: "/profile" },
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ]
    };
  }
};
</script>