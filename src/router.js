import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/HomePage.vue")
    },
    {
      path: "/about",
      component: () => import("./pages/AboutPage.vue")
    },
    {
      path: "/simple-table",
      component: () => import("./pages/SimpleTablePage.vue")
    }
  ]
});
