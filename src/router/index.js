import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserView from "../views/UserView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserView",
    component: UserView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
