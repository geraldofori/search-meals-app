import { createStore } from "vuex";
import state from "./state.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";
import * as getters from "./getters.js";

const store = createStore({
  state,
  mutations,
  actions,
  getters,
});

export default store;
