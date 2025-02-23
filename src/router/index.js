import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductPage from '@/views/Productpage.vue';
import Item from '@/views/Itempage.vue';



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/productsp',
    name: 'Productsp',
    component: ProductPage
  },
  {
    path: '/item',
    name: 'Item',
    component: Item
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
