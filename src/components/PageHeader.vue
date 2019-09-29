<template>
  <header>
    <div class="header-container">
      <slot></slot>
    </div>
    <div class="wave-svg">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C249.27,143.87 252.91,2.75 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke:none;fill:#17242d;"></path>
        </svg>
    </div>
  </header>
</template>

<style scoped>
header {
    background-color: var(--accent-purple);
}

header .header-container {
    max-width: calc(700px + 2rem);
    padding: 3em 1rem 0 1rem;
    margin: auto;
}

.index-header .header-container {
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 3rem .5rem;
}

header h1 {
    margin-bottom: 0;
}

header h2 {
    margin-top: .5rem;
    font: 400 1.3em 'Roboto', sans-serif;
    color: rgba(255,255,255,.8);
}

.wave-svg {
    height: 150px;
    overflow: hidden;
}

.wave-svg svg {
    height: 100%;
    width: 100%;
}
</style>
