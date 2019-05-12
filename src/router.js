import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Events from "./components/Event/Events.vue";
import CreateEvent from "./components/Event/CreateEvent.vue";
import Profile from "./components/User/Profile.vue";
import Signup from "./components/User/Signup.vue";
import Signin from "./components/User/Signin.vue";

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
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
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

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
