import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import DateFilter from "./filters/date";
import firebase from "firebase";
import AlertCmp from "./components/Shared/Alert.vue";
// import EditEventDetailsDialog from "./components/Event/Edit/EditEventDatailsDialog.vue";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", AlertCmp);
// Vue.component("app-edit-event-datails-dialog", EditEventDetailsDialog);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDXkMSBiVXMFfjKhqxw9sgHEhDFmmS6POM",
      authDomain: "test-9991c.firebaseapp.com",
      databaseURL: "https://test-9991c.firebaseio.com",
      projectId: "test-9991c",
      storageBucket: "test-9991c.appspot.com",
      messagingSenderId: "712570669760",
      appId: "1:712570669760:web:169c794c6d3e647c"
    });
    this.$store.dispatch("loadEvents");
  }
});
