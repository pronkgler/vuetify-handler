import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/About",
      component: () => import("./pages/About.vue")
    },
    {
      path: "/Table",
      component: () => import("./pages/Table.vue")
    },
    {
      path: "/People",
      component: () => import("./pages/People.vue")
    },
    {
      path: "/Sandra",
      component: () => import("./pages/Sandra.vue")
    },
    {
      path: "/EditList",
      component: () => import("./pages/EditList.vue")
    }  
    
  ]
});
