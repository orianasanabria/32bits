import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/busquedas",
    name: "Busquedas",
    component: () =>
      import( /* webpackChunkName: "busquedas" */ "../views/Busquedas.vue"),
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: () =>
      import( /* webpackChunkName: "ventas" */ "../views/Ventas.vue"),
  },
  {
    path: "/total",
    name: "Total",
    component: () =>
      import( /* webpackChunkName: "total" */ "../views/Total.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;