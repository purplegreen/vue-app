import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/walkpath/:id",
      name: "walkpath-show",
      component: EventShow,
      props: true
    },
    {
      path: "/walkpath/create",
      name: "event-create",
      component: EventCreate
    }
  ]
});
