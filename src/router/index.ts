import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home.vue';
import Cart from '@/page/Cart.vue';
import About from '@/page/About.vue';
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
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = (typeof to.meta?.title === 'string') ? to.meta.title : 'Weecommerce';
});

export default router
