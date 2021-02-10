<template>
    <div>
      <p>Aulas</p>
      <ul>
          <li v-for="aula in aulas" :key="aula.nome">
              <p>{{aula.nome}} | {{aula.duracao}} minutos</p>
              <button @click="completarAula(aula)">Completar Aula</button>
          </li>
      </ul>
    </div>
</template>

<script>

export default {
    name: "aulas",
    data() {
        return {
            aulas: [
                {
                    nome: "HTML e CSS",
                    duracao: 15
                },
                {
                    nome: "Javascript",
                    duracao: 30
                },
                {
                    nome: "UX Design",
                    duracao: 20
                }
            ]
        }
    },
    methods: {
        completarAula(aula) {
            this.$store.commit("COMPLETAR_AULA", aula);
        }
    }
}
</script>

<style>

</style>