<template>
  <div id="app">
    <NavBar />
    <router-view />
    <PageFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Inconsolata');

@font-face {
    font-family: "Cereal";
    font-weight: 500;
    font-style: normal;
    src: url("~@/assets/AirbnbCerealBold.woff") format("woff");
}

:root {
  --accent-blue: #3498db;
  --accent-green: #00c8af;
  --accent-purple: #9146FF;
  --accent-yellow: rgb(250, 166, 26);
  --background: #000000;
  --background-dark: rgb(24,24,27);
  --background-darker: rgb(33,33,38);
  --background-light: rgb(42,42,47);
  --background-lighter: rgb(51,51,56);
  --pro-gradient: linear-gradient(120deg, var(--accent-green), var(--accent-purple));
  --text-primary: #f0f0ff;
  --text-secondary: rgba(240,240,255,.8);
  --text-tertiary: rgba(240,240,255,.7);
  --text-hint: rgba(240,240,255,.5);
}

body {
  margin: 0;
  color: var(--text-primary);
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
  color: var(--text-tertiary);
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
  font: 500 1.75em 'Cereal', 'Roboto', sans-serif;
}

h2 {
  font: 500 1.5em 'Cereal', 'Roboto', sans-serif;
}

h3 {
  font: 500 1.25em 'Cereal', 'Roboto', sans-serif;
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
