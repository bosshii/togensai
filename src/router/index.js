import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/MainDashBoard"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/MainProjects"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/views/MainTeam"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
