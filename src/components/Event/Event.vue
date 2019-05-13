<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">{{event.title}}</h4>
          </v-card-title>
          <v-img :src="event.imageUrl" height="400px"></v-img>
          <v-card-text>
            <div class="info--text">{{event.date}} - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    event() {
      return this.$store.getters.loadedEvent(this.id);
    }
  }
};
</script>
