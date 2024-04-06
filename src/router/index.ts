import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home.vue';
import Cart from '@/page/Cart.vue';
import About from '@/page/About.vue';
import Auth from '@/page/Auth.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Weecommerce - Home'
      }
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Auth,
      meta: {
        title: 'Weecommerce - Login'
      },
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Auth,
      meta: {
        title: 'Weecommerce - Register'
      },

    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title: 'Weecommerce - Cart'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Weecommerce - About'
      }
    },
    {
      path: '/auth',
      redirect: '/auth/login'
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = (typeof to.meta?.title === 'string') ? to.meta.title : 'Weecommerce';
});

export default router
