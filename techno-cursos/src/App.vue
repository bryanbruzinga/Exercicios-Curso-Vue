<template>
  <div id="app">
    <TheHeader/>
    <router-view></router-view>
  </div>
    
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #234;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    font-weight: bold;
    text-decoration: none;
    color: #234;
}

a.router-link-active {
    color: #4b8;
}
</style>
