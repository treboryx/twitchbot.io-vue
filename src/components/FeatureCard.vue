<template>
  <div class="card">
    <img :src="'https://img.icons8.com/color/48/000000/' + icon + '.png'" :alt="iconAlt">
    <div class="gr">
      <h3>{{ title }}</h3>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style>
.card {
  flex: 0 0 335px;
  padding: 1rem 0;
}

.card h3 {
  margin: 0 0 .5rem 0;
}

.card p {
  margin: 0;
  line-height: 1.2;
}

.card img {
  height: 48px;
  width: 48px;
}
</style>

<script>
export default {
  props: ['icon', 'iconAlt', 'title']
}
</script>
