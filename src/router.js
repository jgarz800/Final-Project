import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Login from "./pages/login.vue";
import Store from "./pages/store.vue";
import Software from "./pages/software.vue";
import Blog from "./pages/blog.vue";
import Contact from "./pages/contact.vue";
import Showcase from "./pages/showcase.vue"
import NotFound from "./pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/software",
    name: "Software",
    component: Software,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/showcase",
    name: "Showcase",
    component: Showcase,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;