import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/partidas",
    name: "partidas",
    component: () => import("../views/Matches"),
  },
  {
    path: "/estatisticas",
    name: "estatisticas",
    component: () => import("../views/Stats"),
  },
  {
    path: "/tabela",
    name: "tabela",
    component: () => import("../views/Table"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
