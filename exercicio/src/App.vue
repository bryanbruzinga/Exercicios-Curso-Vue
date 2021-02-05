<!--
Crie 3 componentes:
1: Componente falando sobre a empresa
2: Componente com os serviços da empresa
3: Componente com um formulário de contato

Crie um menu, que ao cliqye ele mude os componentes acima de forma dinâmica. Não destrua o componente
-->

<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva = 'Empresa'">Sobre</li>
      <li @click="abaAtiva = 'Servico'">Serviços</li>
      <li @click="abaAtiva = 'Formulario'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import Empresa from './components/Empresa.vue'
import Servico from './components/Servico.vue'
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Empresa,
    Servico,
    Formulario
  },
  data() {
    return {
      abaAtiva: 'Empresa'
    }
  }
}
</script>
