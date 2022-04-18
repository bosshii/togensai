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
    component: () => import("@/views/programs/PagePrograms"),
  },
  {
    path: "/programs/timetable",
    name: "timetable",
    component: () => import("@/views/programs/PageProgramsTimetable"),
  },
  {
    path: "/programs/k-1",
    name: "k1",
    component: () => import("@/views/programs/PageProgramsK1"),
  },
  {
    path: "/programs/quiz",
    name: "quiz",
    component: () => import("@/views/programs/PageProgramsQuiz"),
  },
  {
    path: "/programs/radio",
    name: "radio",
    component: () => import("@/views/programs/PageProgramsRadio"),
  },
  {
    path: "/programs/asta",
    name: "asta",
    component: () => import("@/views/programs/PageProgramsAsta"),
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
    path: "/announcements",
    name: "announcements",
    component: () => import("@/views/PageAnnouncements"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/PagePrivacy"),
  },
  { path: "/notices",
    redirect: "/announcements",
  },
  { path: "/notice",
    redirect: "/announcements",
  },
  { path: "/arena",
    redirect: "/programs/timetable",
  },
  { path: "/homerooms",
    redirect: "/programs/timetable",
  },
  { path: "/homeroom",
    redirect: "/programs/timetable",
  },
  { path: "/k-1",
    redirect: "/programs/k-1",
  },
  { path: "/k1",
    redirect: "/programs/k-1",
  },
  { path: "/quiz",
    redirect: "/programs/quiz",
  },
  { path: "/radio",
    redirect: "/programs/radio",
  },
  { path: "/asta",
    redirect: "/programs/asta",
  },
  { path: "/reserve",
    redirect: "/reservation",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;