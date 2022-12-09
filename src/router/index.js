import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    component: () =>
      import(/* webpackChunkName: "Brazil" */ "@/views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "@/views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "@/views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "@/views/Panama.vue"),
  },
  {
    path: "/destination/:id",
    component: () => import("@/views/DestinationShow.vue"),
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
