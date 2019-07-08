<template>
  <div>
    <div class="wave-svg">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C249.27,143.87 252.91,2.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke:none;fill:#12191f;"></path>
      </svg>
    </div>
    <div class="accented-area">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.wave-svg {
  height: 150px;
  overflow: hidden;
}

.wave-svg svg {
  height: 100%;
  width: 100%;
}

.accented-area {
  background-color: #12191f;
  padding: 1px; /* css child margin fix */
}
</style>
