<template>
  <div class="ts">
    <img class="profile-icon" :src="iconUrl">
    <p class="message">
      <slot></slot>
    </p>
    <span class="name">
      {{ name }}
      <span v-if="org" class="org">{{ org }}</span>
    </span>
  </div>
</template>

<style scoped>
.ts {
    background-color: var(--background-darker);
    height: 272px;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 26px;
    text-align: center;
    position: relative;
    display: flex !important;
    flex-flow: column nowrap;
    outline: none !important;
}

.ts .profile-icon {
    height: 52px;
    width: 52px;
    border-radius: 52px;
    position: absolute;
    top: -26px;
    margin-left: calc(50% - 26px - 1rem);
}

.ts .message {
    flex: auto 1 0;
    margin: 0;
    font-size: .95rem;
    line-height: 1.3;
    display: flex;
    align-items: center;
}

.ts .name {
    font-size: 1.05rem;
    display: block;
}

.ts .org {
    display: block;
    color: rgba(255,255,255,.5);
    font-size: .75rem;
}
</style>

<script>
export default {
  props: ['iconUrl', 'name', 'org']
}
</script>
