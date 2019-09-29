<template>
  <transition name="fade-scale">
    <div class="modal-background">
      <div class="modal-box">
        <div class="modal-nav">
          <span class="modal-title">{{ title }}</span>
          <span class="modal-close" @click="closeMethod()">
            <CloseIcon />
          </span>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
}

.fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity .1s, transform .1s;
}

.fade-scale-enter, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(.85);
}

.modal-box {
  background-color: var(--background);
  border-radius: 10px;
  width: 320px;
  max-width: 100vw;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

.modal-box .modal-nav {
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.modal-box .modal-title {
  flex-grow: 1;
  font: 500 1rem 'Poppins', 'Roboto', sans-serif;
}

.modal-box .modal-close {
  font-size: 1.5rem;
  line-height: 1rem;
  color: rgba(255,255,255,.6);
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
}

.modal-box .modal-body {
  padding: 0 1rem 1rem 1rem;
}

.modal-box .modal-text {
  color: rgba(255,255,255,.8);
  font-size: .9rem;
}

.modal-box .modal-card {
  display: block;
  padding: .5rem;
  border-radius: 3px;
  background-color: var(--background-lighter);
  margin-top: .5rem;
  color: white;
}

.modal-box .modal-card .minor {
  font-size: .75rem;
  display: block;
  color: rgba(255,255,255,.6);
}
</style>

<script>
import CloseIcon from 'mdi/Close.vue'

export default {
  components: {
    CloseIcon
  },
  props: ['title', 'closeMethod']
}
</script>
