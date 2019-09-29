<template>
  <div id="app">
    <NavBar />
    <router-view />
    <PageFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Poppins:500|Inconsolata');

:root {
  --accent-blue: #3498db;
  --accent-green: #43b581;
  --accent-purple: #54338C;
  --background: #17242d;
  --background-dark: #12191f;
  --background-darker: #06090B;
  --background-light: #1A2127;
  --background-lighter: #283f4f;
  --text-color: rgba(255,255,255,.7);
}

body {
  margin: 0;
  color: white;
  background-color: var(--background);
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

*[only-mobile], .logged-in-ctx a[only-mobile] {
  display: none;
}

img, .button, nav * {
  user-select: none;
  -moz-user-select: none;
}

a {
  text-decoration: none;
  outline: none;
  color: inherit;
}

p, li {
  color: var(--text-color);
}

p.standalone {
  line-height: 1.5;
  max-width: 650px;
  margin: 1em auto;
  text-align: center;
}

p.standalone a {
  text-decoration: underline;
}

code {
  font-family: 'Inconsolata', monospace;
  font-size: inherit;
}

h1 {
  font: 500 1.75em 'Poppins', 'Roboto', sans-serif;
}

h2 {
  font: 500 1.5em 'Poppins', 'Roboto', sans-serif;
}

h3 {
  font: 500 1.25em 'Poppins', 'Roboto', sans-serif;
}

.section {
  max-width: calc(700px + 2rem);
  padding: 0 1rem;
  margin: auto;
  margin-bottom: 5rem;
}

@media screen and (max-width: 540px) {
  p {
    font-size: 1.1rem;
  }

  *[no-mobile] {
    display: none !important;
  }

  *[only-mobile], .logged-in-ctx a[only-mobile] {
    display: block;
  }
}
</style>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    PageFooter
  }
}
</script>
