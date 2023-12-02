<template>
      
    <form @submit.prevent="enviarFormulario">
      <div class="container flex mt-4  max-w-screen-lg mx-auto rounded-lg p-0 bg-gray-200">
 
        <div class="w-1/2 p-4 mt-2 ">
        <div class="bg-teal-950  text-white font-bold py-2 px-4 rounded">Conecte-se</div>
        <div v-if="mostrarMensagem" class="mt-4">
              <p class="flex justify-center text-green-600">{{ mensagem }}</p>
    </div>
        <div class="flex items-center justify-center">
        <img src="../assets/perfil.png" alt="Logo" class="mt-5 rounded-full w-32 h-32 object-cover" />
        </div>
    
        <div class="flex mt-4 items-center ">
  <i class="fas fa-solid fa-user p-3"></i>
  <div class=" border-b border-gray-500 w-full">
  <input v-model="dadosFormulario.username" type="text" id="username" name="username" placeholder="Username" class="w-full h-8 pl-2 pr-3 bg-transparent border rounded-lg  " required/>
</div>
</div>
<div class="flex items-center pl-2 pr-3">
    <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="20" height="100" viewBox="0 0 30 30">
<path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z M 9 17 C 10.105 17 11 17.895 11 19 C 11 20.104 10.105 21 9 21 C 7.895 21 7 20.104 7 19 C 7 17.895 7.895 17 9 17 z M 15 17 C 16.105 17 17 17.895 17 19 C 17 20.104 16.105 21 15 21 C 13.895 21 13 20.104 13 19 C 13 17.895 13.895 17 15 17 z M 21 17 C 22.105 17 23 17.895 23 19 C 23 20.104 22.105 21 21 21 C 19.895 21 19 20.104 19 19 C 19 17.895 19.895 17 21 17 z"></path>
</svg>
  <div class=" border-b pl-2 border-gray-300 w-full">
 <input v-model="dadosFormulario.senha" type="password" name="senha" id="senha" placeholder="Senha" class="w-full bg-transparent pl-2 mt-4 border-b border-gray-500" required />
          </div>
</div>

  <br>
          
          <div class="flex items-center justify-center">
             <button  class="bg-teal-950 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Cadastrar Produto</button>
            </div>  
      
        </div> 
     
    <div class="w-1/2 flex items-end ">
      <img src="../assets/stores.png" class="h-full rounded-br-lg rounded-tr-lg" />
          <br>
    </div>

    
  </div>
</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface DadosFormulario {
  username: string;
  senha: string;
}

export default defineComponent({
  data() {
    return {
      mostrarMensagem: false,
      mensagem: '',
      dadosFormulario: {
        username: '',
        senha: '',
      } as DadosFormulario,
    };
  },
  methods: {
    enviarFormulario() {
      console.log('Dados do formulário:', this.dadosFormulario);

      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.dadosFormulario.username,
          password: this.dadosFormulario.senha,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          if (!res.ok) {
            console.error('Erro na resposta:', res.status, res.statusText);
            throw new Error('Erro ao tentar fazer login');
          }
          return res.json();
        })
        .then(json => {
          console.log('Resposta da API:', json);
          this.mensagem = 'Logado com sucesso!';
          this.mostrarMensagem = true;
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
          this.mensagem = 'Erro ao tentar fazer login';
          this.mostrarMensagem = true;
        });
    },
  },
});
</script>