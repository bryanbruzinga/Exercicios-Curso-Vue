<template>
  <div id="app">
    <h1>Logo</h1>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/cursos'>Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
}
</script>

<style>
#app {
  text-align: center;
}
a {
  padding: 10px;
}
</style>
