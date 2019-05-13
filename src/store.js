import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    loadedEvents: [
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        id: "kshsyabamcow323",
        title: "Events in Itoshima",
        date: "2019-05-23"
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        id: "djufhebnsibb119",
        title: "Events in Tenjin",
        date: "2019-06-13"
      }
    ],
    user: {
      id: "bsuejfhsiake",
      registeredEvents: ["msiyyfgtydh"]
    }
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    }
  },
  getters: {
    loadedEvents(state) {
      return state.loadedEvents.sort((eventA, eventB) => {
        return eventA.date > eventB.date;
      });
    },
    featuredEvents(state, getters) {
      return getters.loadedEvents.slice(0, 5);
    },

    loadedEvent(state) {
      return eventId => {
        return state.loadedEvents.find(event => {
          return event.id === eventId;
        });
      };
    }
  }
});
