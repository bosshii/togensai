import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("@/views/Programs"),
  },
  {
    path: "/programs/quiz",
    name: "quiz",
    component: () => import("@/views/ProgramsQuiz"),
  },
  {
    path: "/programs/radio",
    name: "radio",
    component: () => import("@/views/ProgramsRadio"),
  },
  {
    path: "/access",
    name: "access",
    component: () => import("@/views/Access"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("@/views/Map"),
  },
  {
    path: "/info/about",
    name: "about",
    component: () => import("@/views/InfoAbout"),
  },
  {
    path: "/info/ict",
    name: "ict",
    component: () => import("@/views/InfoIct"),
  },
  {
    path: "/info/privacy",
    name: "privacy",
    component: () => import("@/views/InfoPrivacy"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@/views/Message"),
  },
  {
    path: "/forstudents",
    name: "students",
    component: () => import("@/views/Students"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
