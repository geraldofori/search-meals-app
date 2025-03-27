<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searcForMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal?.strMealThumb"
          :alt="meal?.strMeal"
          class="h-48 w-full object-cover rounded-t-xl"
        />
      </router-link>

      <div class="p-3">
        <h3 class="text-xl font-semibold text-gray-800">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          jfl;akjsfdjak;sjdfkal;jsfkd aksdmfka akdjfkaj kajdkfjak jdf aksjd fkaj
          kdjafkj jdka lfjdkf ka kajdkfj k
        </p>
        <div class="flex items-center justify-between">
          <YoutubeButton :href="meal?.strYoutube">Youtube</YoutubeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../YoutubeButton.vue";
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");

function searcForMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searcForMeals();
  }
});
</script>
