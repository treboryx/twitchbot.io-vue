<template>
  <div class="cta-main">
    <div class="cta-content">
      <h1>{{ title }}</h1>
      <p>
        <slot></slot>
      </p>
    </div>
    <div>
      <Button default="true" shine="true" @click.native="buttonClick()">{{ buttonText }}</Button>
    </div>
  </div>
</template>

<style scoped>
.cta-main {
  padding: 1.5rem;
  max-width: 750px;
  margin: 5rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.cta-content {
  margin-right: 1.5rem;
}

h1 {
  margin-top: 0;
  font-size: 1.5rem;
}

p {
  font-size: 1.05rem;
  line-height: 1.4;
  margin: 0;
}

.button {
  margin: 0;
}

@media (max-width: 670px) {
  .cta-main {
    flex-flow: column wrap;
    text-align: center;
  }

  .cta-content {
    margin-bottom: 2rem;
  }
}
</style>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    title: String,
    buttonText: String,
    buttonClick: Function
  }
}
</script>
