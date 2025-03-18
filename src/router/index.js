import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import MealList from "../components/views/MealsByName.vue";
import MealsByName from "../components/views/MealsByName.vue";
import MealsByLetter from "../components/views/MealsByLetter.vue";
import MealsByIngredient from "../components/views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter",
        name: "byMealLetter",
        component: MealList,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
    ],
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
