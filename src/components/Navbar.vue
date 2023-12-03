<template>
      <div class="bg-teal-950 text-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        
      <nav id="nav" class="lg:flex space-x-4">
        <router-link to="/Products">Products</router-link>
       <router-link to="/Cadastrar">Cadastrar</router-link>
       <router-link to="/Login">Login</router-link> 
   </nav>
</div>
</div>

<router-view/>
</template>

<script lang="ts">
import Products from '../views/Products.vue';
export default{
    name: 'Navbar',
    components: { Products }
}
</script>
