<template>
  <a :href="href" target="_blank">
    <img :alt="title" :title="title" :src="getImageURI(src)">
  </a>
</template>

<style scoped>
a {
  flex: 50% 0 0;
  display: flex;
  justify-content: center;
}

img {
  display: block;
  max-width: 150px;
  filter: grayscale(1);
  transition: filter, opacity .25s;
  opacity: .8;
}

img:hover {
  filter: grayscale(0);
  opacity: 1;
}
</style>

<script>
export default {
  props: ['href', 'title', 'src'],
  methods: {
    getImageURI (src) {
      let context = require.context('../assets/', false, /\.png$|\.svg$|\.webp$/)
      return context('./' + src)
    }
  }
}
</script>
