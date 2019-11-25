import Vue from "vue";
import Vuex from "vuex";
import WalkPathService from "../services/WalkPathService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc", name: "Nana Mina" },
    categories: ["meditation", "listening", "floating"],
    // todos: [
    //   { id: 1, text: "jump 3 times please", done: true },
    //   { id: 2, text: "walk for 5 minutes around the tree", done: false },
    //   { id: 3, text: "breathe in 123, breate out 1234", done: true },
    //   { id: 4, text: "talk to your neighbour", done: false },
    //   { id: 5, text: "think of 3 nice thinghs that happened today", done: true }
    // ],
    walkpaths: [
      { id: 1, title: "over and Over", duration: "12min" },
      { id: 2, title: "Siverlake", duration: "16min" },
      { id: 3, title: "Blue Ocean", duration: "15min" },
      { id: 4, title: "Slow Motion", duration: "34min" },
      { id: 4, title: "Yellow Sand", duration: "9min" }
    ]
  },
  mutations: {
    ADD_WALKPATH(state, walkpath) {
      state.walkpaths.push(walkpath);
    }
  },
  actions: {
    createWalkpath({ commit }, walkpath) {
      WalkPathService.postWalkpath(walkpath);
      commit("ADD_WALKPATH", walkpath);
    }
  },
  getters: {
    getWalkpathById: state => id => {
      return state.walkpaths.find(walkpath => walkpath.id === id);
    }
    // catLength: state => {
    //   return state.categories.length;
    // },
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done);
    // },
    // activeTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done).length;
    // }
  },
  modules: {}
});
