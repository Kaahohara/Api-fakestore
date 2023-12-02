<template>
  <form @submit.prevent="enviarFormulario">
    <div class="container flex mt-2 max-w-screen-lg rounded-lg p-0 bg-gray-200">
      <div class="w-1/2 ">
        <div v-if="mostrarMensagem">
          <p class="flex justify-center text-green-600">Produto cadastrado com sucesso!</p>
        </div>
        <div class="ml-5 mr-5 bg-teal-950 text-white mt-4 font-bold py-2 px-4 rounded">Cadastro de Produtos</div>
        <div class="mx-auto flex flex-col items-center">
       
          <input type="text" name="nome" placeholder="Nome" class="ml-2 mt-4 bg-transparent border-b border-gray-500" v-model="produto.title" required/>
          <br>
          <input type="text" id="preco" nome="preco" placeholder="Preço" class="ml-2 bg-transparent mt-4 border-b border-gray-500" v-model="produto.price" required />
          <br>
          <textarea id="descricao" name="descricao" class="mt-4 ml-2 bg-transparent border-b border-gray-500" placeholder="Descrição" v-model="produto.description" required></textarea>
          <br>
          <input type="text" name="imagem" placeholder="URL imagem" class="mt-4 ml-2 bg-transparent border-b border-gray-500" id="imagem" v-model="produto.image" required />
          <br>
          <input type="text" name="categoria" placeholder="Categoria" class="mt-4 ml-2 bg-transparent border-b border-gray-500" id="categoria" v-model="produto.category" required />
          <br>
          <button class="bg-teal-950 mt-4 text-white font-bold py-2 px-4 rounded" type="submit">Cadastrar Produto</button>
        </div>
        <br><br>
       
      </div>

      <div class="w-1/2 flex items-end">
        <img src="../assets/stores.png" class="h-full rounded-br-lg rounded-tr-lg" />
      </div>
    </div>
  </form>
</template>


  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Produto {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export default defineComponent({
    data() {
      return {
        produto: {
          title: '',
          price: 0,
          description: '',
          image: '',
          category: '',
        } as Produto,
        mostrarMensagem: false,
      };
    },
    methods: {
      async enviarFormulario() {
        try {
          const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.produto),
          });
  
          if (!response.ok) {
            throw new Error('Erro ao cadastrar o produto');
          }
  
           this.produto = {
            title: '',
            price: 0,
            description: '',
            image: '',
            category: '',
          };
  
         this.mostrarMensagem = true;
        } catch (error) {
          console.error('Erro ao cadastrar produto:', error);
        }
      },
    },
  });
  </script>
  
