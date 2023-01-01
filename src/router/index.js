import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/IndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../views/NewMemoView.vue"),
    },
  ],
});

export default router;
