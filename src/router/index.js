import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/PageHome"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("@/views/PagePrograms"),
  },
  {
    path: "/programs/quiz",
    name: "quiz",
    component: () => import("@/views/PageProgramsQuiz"),
  },
  {
    path: "/programs/radio",
    name: "radio",
    component: () => import("@/views/PageProgramsRadio"),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () => import("@/views/PageReservation"),
  },
  {
    path: "/access",
    name: "access",
    component: () => import("@/views/PageAccess"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/PageAbout"),
  },
  {
    path: "/ict",
    name: "ict",
    component: () => import("@/views/PageIct"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@/views/PageMessage"),
  },
  {
    path: "/forstudents",
    name: "students",
    component: () => import("@/views/PageStudents"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/PagePrivacy"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;