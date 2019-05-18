import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Events from "./components/Event/Events.vue";
import CreateEvent from "./components/Event/CreateEvent.vue";
import MyEvent from "./components/User/MyEvent.vue";
import Signup from "./components/User/Signup.vue";
import Signin from "./components/User/Signin.vue";
import Event from "./components/Event/Event.vue";
// import AuthGuard from "./router/auth-guard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/events",
      name: "Events",
      component: Events
    },
    {
      path: "/event/new",
      name: "CreateEvent",
      component: CreateEvent
      // beforeEnter: AuthGuard
    },
    {
      path: "/events/:id",
      name: "Event",
      props: true,
      component: Event
    },
    {
      path: "/myevent",
      name: "MyEvent",
      component: MyEvent
      // beforeEnter: AuthGuard
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    }
  ]
});
