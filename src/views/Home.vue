<template>
  <v-container>
    <v-layout row wrap>
      <v-flex x12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/events" class="info">Explore Events</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/event/new" class="info">Organize Events</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="event in events"
            :src="event.imageUrl"
            :key="event.id"
            @click="onLoadEvent(event.id)"
          >
            <div class="title">{{ event.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome events!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  computed: {
    events() {
      return this.$store.getters.featuredEvents;
    }
  },
  methods: {
    onLoadEvent(id) {
      this.$router.push("/events/" + id);
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
