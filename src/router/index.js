import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
