<template>
  <div id="app">
    <NavBar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Poppins:500|Inconsolata');

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>
