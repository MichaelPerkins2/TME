import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Recommendations from "@/pages/Recommendations.vue";
import Reviews from "@/pages/Reviews.vue";
import SignIn from "@/pages/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/new",
      name: "News",
      component: News,
    },
    {
      path: "/recommendations",
      name: "Recommendations",
      component: Recommendations,
    },
    {
      path: "/reviews",
      name: "Reviews",
      component: Reviews,
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignIn,
      },
  ],
});

export default router;
