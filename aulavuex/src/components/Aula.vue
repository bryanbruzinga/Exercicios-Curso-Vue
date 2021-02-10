<template>
  <div>
      <p>Aula {{totalAulas}}, esse é o usuário: {{user}}</p>
      <button @click="mostrarConsole">Mostrar no console</button>
      </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    data() {
        return {
            totalAulas: 25,
        }
    },
    computed: mapState(["user", "aulasCompletas"]) ,
    methods: {
        mostrarConsole() {
            console.log(this.user)
        }
    }
}
</script>

<style>

</style>