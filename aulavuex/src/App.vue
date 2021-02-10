<template>
  <div id="app">
    <Aluno />
    <Cursos />
  </div>
</template>

<script>

import Aluno from './components/Aluno.vue'
import Cursos from './components/Cursos.vue'


export default {
  name: 'App',
  components: {
    Aluno,
    Cursos
  }
}
</script>

<style>

</style>
