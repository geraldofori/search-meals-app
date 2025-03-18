<template>
  <div class="p-8">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searcForMeals"
    />
  </div>
  <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../../store";
const meals = computed(() => store.state.searchedMeals);

const keyword = ref("");
function searcForMeals() {
  console.log("keyword.value", keyword.value);
  store.dispatch("searchMeals", keyword.value);
}
</script>
