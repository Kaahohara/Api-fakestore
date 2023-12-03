import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Products.vue'),
    
    },
    {
      path: '/Products',
      component: () => import('../views/Products.vue'),
    
    },

  
    {
      path: '/Atualizar/:id',
      name:'atualizar',
      component: () => import('../views/Atualizar.vue'),
    },

    {
      path: '/cadastrar',
      component: () => import('../views/Cadastrar.vue'),
    },
   
    {
      path: '/Login',
      component: () => import('../views/Login.vue'),
    },
    

  ],
})
