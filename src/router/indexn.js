import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/programs/quiz",
    name: "quiz",
    component: () => import("@/views/PageProgramsQuiz"),
  },
  {
    path: "/forstudents",
    name: "students",
    component: () => import("@/views/PageStudents"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;