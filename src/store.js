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
        date: new Date(),
        location: "Itoshima",
        description: "伊都菜彩！"
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
        id: "djufhebnsibb119",
        title: "Events in Tenjin",
        date: new Date(),
        location: "Tenjin",
        description: "めんたいこ！"
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
    },
    createEvent(state, payload) {
      state.loadedEvents.push(payload);
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    createEvent({ commit }, payload) {
      const event = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "bjshuddjel"
      };
      //Reach out to firebase and store it
      commit("createEvent", event);
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
