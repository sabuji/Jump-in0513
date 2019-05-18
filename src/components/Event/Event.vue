<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">{{event.title}}</h4>
            <template v-if="true">
              <v-spacer></v-spacer>
              <app-edit-event-details-dialog></app-edit-event-details-dialog>
            </template>
          </v-card-title>
          <v-img :src="event.imageUrl" height="400px"></v-img>
          <v-card-text>
            <div class="info--text">{{event.date | date}} - {{event.location}}</div>
            <div>{{event.description}}</div>
            <div class="info--text">{{event.mail}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn class="primary">Register</v-btn> -->
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
