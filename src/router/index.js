import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Brazil from "@/views/Brazil.vue";
import Hawaii from "@/views/Hawaii.vue";
import Jamaica from "@/views/Jamaica.vue";
import Panama from "@/views/Panama.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: Hawaii,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica,
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
