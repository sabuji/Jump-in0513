import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

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
    user: null
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    createEvent(state, payload) {
      state.loadedEvents.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
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
    },
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registeredEvents: []
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    user(state) {
      return state.user;
    }
  }
});
