import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import DateFilter from "./filters/date";
import firebase from "firebase";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);

var firebaseConfig = {
  apiKey: "AIzaSyDXkMSBiVXMFfjKhqxw9sgHEhDFmmS6POM",
  authDomain: "test-9991c.firebaseapp.com",
  databaseURL: "https://test-9991c.firebaseio.com",
  projectId: "test-9991c",
  storageBucket: "test-9991c.appspot.com",
  messagingSenderId: "712570669760",
  appId: "1:712570669760:web:169c794c6d3e647c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
