import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Bot from "./views/Bot.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bot",
      name: "bot",
      component: Bot
    }
  ]
});