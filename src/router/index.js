import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/:id",
      name: "bookid",
      component: () => import("../pages/bookid.vue"),
    },
  ],
});

export default router;
