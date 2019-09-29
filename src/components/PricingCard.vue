<template>
  <div class="p-card">
    <h4>{{ tierName }}</h4>
    <span class="price" v-if="!hidePrice">
      ${{ price }}
      <small>/ Month</small>
    </span>
    <div class="features">
      <slot></slot>
    </div>
    <Button v-if="!hidePrice" shine="true" :href="'https://www.patreon.com/join/devakira/checkout?rid=' + rid">
      Select tier
    </Button>
  </div>
</template>

<style scoped>
.p-card {
    background-color: var(--background-darker);
    padding: 1rem;
    border-radius: 3px;
    width: 250px;
    margin: 0 .5rem 1rem .5rem;
    position: relative;
}

.p-card h4 {
    font: 400 .9em 'Roboto', sans-serif;
    margin: 0;
    color: var(--text-hint);
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
    color: var(--text-secondary);
    display: inline-block;
    margin-bottom: .25rem;
}

.p-card .features span .material-design-icon {
  position: relative;
  top: 6px;
}

.p-card .button {
    margin: 1.5rem 0 0 0;
    background-image: var(--pro-gradient);
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
  props: ['price', 'tierName', 'rid', 'hidePrice']
}
</script>
