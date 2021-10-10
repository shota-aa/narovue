import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Axios from "./pages/Axios.vue";
import Login from "./pages/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/:path(.*)", component: NotFound },
  { path: "/axios", component: Axios},
  { path: "/login", component: Login},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;