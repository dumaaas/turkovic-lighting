import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({
      behavior: 'smooth'
    });
  },
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/configurator',
      name: 'configurator',
      component: () => import('../views/ConfiguratorView.vue'),
      meta: {
        transition: 'slide-left'
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        transition: 'slide-left'
      },
    },
    {
      path: '/products/:name',
      name: 'products',
      component: () => import('../views/ProductView.vue'),
      meta: {
        transition: 'slide-left'
      },
    },
    {
      path: '/decors',
      name: 'decors',
      component: () => import('../views/DecorsView.vue'),
      meta: {
        transition: 'slide-left'
      },
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('../views/ApplicationsView.vue'),
      meta: {
        transition: 'slide-left'
      },
    }
  ]
})

export default router