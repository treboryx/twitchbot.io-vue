<template>
  <div class="p-card">
    <h4>{{ tierName }}</h4>
    <span class="price">
      ${{ price }}
      <small>/ Month</small>
    </span>
    <div class="features">
      <slot></slot>
    </div>
    <Button shine="true" :href="'https://www.patreon.com/join/devakira/checkout?rid=' + rid">
      Select tier
    </Button>
  </div>
</template>

<style scoped>
.p-card {
    background-color: #06090B;
    padding: 1rem;
    border-radius: 3px;
    width: 250px;
    margin: 0 .5rem 1rem .5rem;
    position: relative;
}

.p-card h4 {
    font: 400 .9em 'Roboto', sans-serif;
    margin: 0;
    color: rgba(255,255,255,.5);
}

.p-card .price {
    font-size: 1.75em;
    margin-bottom: 1rem;
    display: block;
    width: 100vw;
}

.p-card .price small {
    font-size: .5em;
}

.p-card .features span {
    font-size: .9rem;
    color: rgba(255,255,255,.9);
    display: block;
    margin-bottom: .25rem;
}

.p-card .features span svg {
    color: rgb(67,181,129);
    margin-right: 5px;
}

.p-card .button {
    margin: 1.5rem 0 0 0;
    background-image: linear-gradient(120deg, #5294E9, #AD45F5);
    width: 100%;
    text-align: center;
    padding: 10px;
}
</style>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  props: ['price', 'tierName', 'rid']
}
</script>
