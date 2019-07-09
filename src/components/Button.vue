<template>
  <a :class="{'button': this.inset !== 'true', 'inset-button': this.inset == 'true', 'default': this.default == 'true', 'shine-btn': this.shine == 'true'}">
    <slot></slot>
    <span v-if="this.shine == 'true'" class="shine"></span>
  </a>
</template>

<style scoped>
.button {
  margin: 6px 8px;
  padding: 12px 22px;
  border-radius: 3px;
  background-color: #283f4f;
  color: rgba(255,255,255,.8);
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none !important;
}

.button.default {
  background-color: rgb(67,181,129);
}

/* Button shine effect */

.shine-wrapper {
  display: inline-block;
}

.shine-btn {
  display: inline-block;
  position: relative;
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;
}

.shine {
  content:'';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform:translateX(100%);
  position: absolute;
  z-index: 0;
  animation: slide 3s infinite 2s;
  background: linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 41%, rgba(255,255,255,0.3) 60%, rgba(128,186,232,0) 61%, rgba(125,185,232,0) 100%);
}

.inset-button {
  cursor: pointer;
  margin: 6px 8px;
  padding: 12px 0;
  color: rgba(255,255,255,.6);
  font-size: .9em;
}

.inset-button .material-design-icon {
  position: relative;
  top: 6px;
}

@keyframes slide {
  0% {transform:translateX(-100%);}
  35% {transform:translateX(100%);}
}
</style>

<script>
export default {
  props: ['default', 'shine', 'inset']
}
</script>
