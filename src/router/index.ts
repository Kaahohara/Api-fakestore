import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Products from '../views/Products.vue';
import Atualizar from '../views/Atualizar.vue';
import Cadastrar from '../views/Cadastrar.vue';
import Login from '../views/Login.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Products,
  },
  {
    path: '/Products',
    component: Products,
  },
  {
    path: '/Atualizar/:id',
    name: 'atualizar',
    component: Atualizar,
  },
  {
    path: '/cadastrar',
    component: Cadastrar,
  },
  {
    path: '/Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory('/Api-fakestore/'),  
  routes,
});

export default router;
