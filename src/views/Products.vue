<template>
<div v-if="mensagem" class="fixed flex h-10 items-center top-3 bg-red-800 right-0 p-4 rounded-lg">
  <p class="text-white flex justify-center text-center text-red-600">Deletado</p>
</div>

<div class="flex flex-wrap justify-center">
  
  <div v-for="product in products" :key="product.id" class=" m-2.5 w-full sm:w-1/4 md:w-1/4 lg:w-1/6 box-border p-4 border border-solid bg-gray-200 rounded-lg border-red-300">
   
    <button @click="idButton(product.id)" class="bg-red-600 w-1/3 mt-2 text-white text-white font-bold py-2 px-3 rounded flex justify-center" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y=" 0px" width="20" height="20" viewBox="0 0 24 24">
        <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
        </svg>
    </button>
    <div class="h-80 mt-2 mb-4 overflow-hidden">
      <img :src="product.image" :alt="product.title" class="w-full h-full object-center">
    </div>
      <div class="h-25 mt-2 mb-2 overflow-hidden">
      {{ product.title }}<br>R${{ product.price }}
    </div>
    
    <router-link :to="{name:'atualizar', params:{id: product.id}}" class="flex justify-center">
  <button class="mb-4 items-center bg-teal-950 text-white font-bold py-2 px-4 rounded" type="submit">Atualizar</button>
</router-link>

  </div>

</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  export default defineComponent({
    name: 'Products',
    data() {
    return {
      mensagem: false
    };
  },
    methods: {
      
      async idButton(id: number) {
      fetch(`https://fakestoreapi.com/products/${id}`, {  method: "DELETE"
})
  .then((res: Response) => res.json())
  .then((json: any) => console.log(json));
      this.mensagem= true;
      setTimeout(() => {
          this.mensagem = false;
        }, 3000);
      }
    
    },
  
  
    setup() {
      const products = ref<Product[]>([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          products.value = response.data;
        } catch (error) {
          console.error('Erro ao obter produtos:', error);
        }
      });
  
      return { products };
    },
  });
  </script>
  