<template>
  <div class="card">
    <img :src="'https://img.icons8.com/color/48/000000/' + icon + '.png'" :alt="iconAlt">
    <div class="gr">
      <h3>{{ title }}</h3>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  flex: 0 0 335px;
  padding: 1rem 0;
  display: flex;
  flex-flow: row nowrap;
}

.card h3 {
  margin: 0 0 .5rem 0;
}

.card p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.4;
}

.card a {
  text-decoration: underline;
}

.card img {
  height: 48px;
  width: 48px;
  flex: 0 0 auto;
  margin-right: 8px;
}

@media screen and (max-width: 849px) {
  .card {
    flex: 1 1 auto !important;
  }
}

</style>

<script>
export default {
  props: ['icon', 'iconAlt', 'title']
}
</script>
