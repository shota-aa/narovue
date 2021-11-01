import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Axios from "./pages/Axios.vue";
import Login from "./pages/Login.vue";
import City from "./pages/City.vue";
import axios from "axios";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { isPublic: true },
  },
  {
    path: "/:path(.*)",
    component: NotFound,
    meta: { isPublic: true },
  },
  {
    path: "/axios",
    component: Axios,
  },
  {
    path: "/login",
    component: Login,
    meta: { isPublic: true },
  },
  {
    path: "/city/:cityName",
    component: City,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// to, fromでfrom.meta.pathも使えると思う。多分ページ離れる時の条件分岐
router.beforeEach(async (to) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    // if (to.path === "/login") { これ/loginでwhoamiが実行されたらって意味。trueはそのまま通す。catch(_)は何も返さなかったらっていみ
    if (to.meta.isPublic) {
      return true;
    }
    return "/login";
  }
  return true;
});

export default router;
