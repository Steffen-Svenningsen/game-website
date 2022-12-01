import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base-layout",
      component: () => import("../layouts/BaseLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
  ],
});

export default router;
