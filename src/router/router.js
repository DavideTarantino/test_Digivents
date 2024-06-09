import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import Backoffice from '../views/Backoffice.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/add',
        name: 'Backoffice',
        component: Backoffice
      },
    ]
  })
  
  export default router