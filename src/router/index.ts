import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import MainView from "@/views/MainView.vue";
import NotificationView from "@/views/NotificationView.vue";
import CollaborationView from "@/views/CollaborationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/main",
      name: "main",
      component: MainView,
    },
    {
      path: "/notification",
      name: "notification",
      component: NotificationView,
    },
    {
      path: "/collaborate",
      name: "collaboration",
      component: CollaborationView,
    },
  ],
});

export default router;
