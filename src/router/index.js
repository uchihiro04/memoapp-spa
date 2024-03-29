import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/memos",
    },
    {
      path: "/memos",
      name: "memos",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/memos/new",
      name: "new",
      component: () => import("../views/EditMemoView.vue"),
    },
    {
      path: "/memos/:id",
      name: "memo",
      component: () => import("../views/EditMemoView.vue"),
    },
  ],
});

export default router;
