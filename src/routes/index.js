import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/province",
    name: "Province",
    component: () => import("../view/Province"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
