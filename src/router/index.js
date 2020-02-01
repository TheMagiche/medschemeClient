import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "../views/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/team",
    name: "team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue")
  },
  {
    path: "/diseases",
    name: "diseases",
    component: () =>
      import(/* webpackChunkName: "team" */ "../views/Disease.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
