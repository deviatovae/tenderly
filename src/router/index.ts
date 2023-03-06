import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue';
import Lounge from '@/views/LoungeView.vue';
import AboutView from '@/views/AboutView.vue';
import ThoughtsView from '@/views/ThoughtsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'thoughts',
      component: ThoughtsView
    },
    {
      path: '/lounge',
      name: 'lounge',
      component: Lounge
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ]
})

export default router
