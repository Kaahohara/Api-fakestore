<template>
  <form @submit.prevent="enviarFormulario">
   
   
    <div class="container p-5 mt-4 max-w-screen-lg mx-auto rounded-lg p-0 bg-gray-200" v-if="products[0]">
      <div class="bg-teal-950 flex text-white font-bold py-2 px-4 rounded">Atualizar</div>
      <div v-if="mostrarMensagem">
          <p class="flex justify-center text-green-600">Produto atualizado com sucesso.</p>
        </div>
      <div class="flex items-center p-3 justify-center" >
        <div class="w-2/4">
        <img :src="products[0].image" :alt="products[0].title" class="w-38 h-full object-center">
      </div>
      <div class="w-2/3 ml-4">
        <div class=" w-full border-b border-t border-l border-r rounded-lg border-black w-full">
          <input
            v-model="dadosFormulario.title"
            type="text"
            id="title"
            name="title"
            class="text-xl w-full font-bold h-8 pl-2 pr-3 bg-transparent border rounded-lg"
            required
          />
        </div>
          <div class="items-center mt-4">
        <div class="border-b border-t border-l border-r rounded-lg border-black w-full">
          <input
            v-model="dadosFormulario.price"
            type="text"
            id="price"
            name="price"
            class="w-full h-8 pl-2 pr-3 bg-transparent  rounded-lg"
            required
          />
        </div>
        <div class="border-b border-t border-l border-r mt-4 rounded-lg border-black w-full">
          <input
            v-model="dadosFormulario.image"
            type="text"
            id="image"
            name="image"
            class="w-full h-8 pl-2 pr-3 bg-transparent rounded-lg"
            required
          />
        </div>
        <div class="border-b border-t border-l border-r mt-4 rounded-lg border-black w-full">
          <input
            v-model="dadosFormulario.category"
            type="text"
            id="category"
            name="category"
            class="w-full h-8 pl-2 pr-3 bg-transparent rounded-lg"
            required
          />
        </div>
      </div>
   
        <div class="items-center justify-center flex items-center">
        <button class="bg-teal-950 mt-4 text-white font-bold py-2 px-4 rounded" type="submit">
         Atualizar
        </button>
      </div>
    </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface DadosFormulario {
  id: number;
  title: string;
  price: number;
  image: string;
  category:string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category:string;
}

export default defineComponent({
  setup() {
    const route = useRoute();

    const products = ref<Product[]>([]);
    const dadosFormulario = ref<DadosFormulario>({
      id: 0,
      title: '',
      price: 0,
      image: '',
      category: '',
      
    });
    const mostrarMensagem = ref(false);
    onMounted(async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
        products.value = [response.data];

        dadosFormulario.value = {
          id: products.value[0].id,
          title: products.value[0].title,
          price: products.value[0].price,
          image: products.value[0].image,
          category: products.value[0].category,
        };
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    });

    return { products, dadosFormulario,mostrarMensagem };
  },

  methods: {
    enviarFormulario() {
      axios
  .put(`https://fakestoreapi.com/products/${this.$route.params.id}`, this.dadosFormulario)
  .then((response: AxiosResponse<DadosFormulario>) => {
    console.log('Resposta da API:', response.data);
    this.mostrarMensagem = true;
  })
  .catch((error: AxiosError) => {
    console.error('Erro na requisição:', error);
    console.log('Detailed error:', error.response);
   
  });
    },
  },
});
</script>
