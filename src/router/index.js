import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import MealList from "../components/views/MealList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },{
    path: "/letter/:letter",
    name: "byMealLetter",
    component: MealList,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
