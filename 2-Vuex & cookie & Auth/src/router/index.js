import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/panel'
  },
  {
    path: '/panel/',
    name: 'AuthParent',
    component: () => import('../views/AuthParent.vue'),
    beforeEnter: async (to, from, next) => {
       const token = await Vue.$cookies.get("token");
       token && store.commit("setToken", token);//varsa yapar if yane salak şeyy 
    


      const authStatus = store.getters["isAuth"];
      if (authStatus) {
        next(true)
      } else {
        next({
          name: "Auth"
        })
      }
    },
    children: [{
        path: 'home',
        name: 'Home',
        component: () => import('../views/panel/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/panel/About.vue'),
      },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router