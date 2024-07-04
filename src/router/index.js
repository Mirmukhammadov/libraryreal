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

    {
      path: "/:lang/:chatchAll(.*)",
      redirect: (to) => {
        const lang = to.params;
        return "/${lang}/home";
      },
    },
  ],
});

export default router;
