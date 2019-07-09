<template>
  <div class="section sidebar-incl">
    <aside>
      <CarbonAd layout="vertical"/>
    </aside>
    <div class="content">
      <slot></slot>
    </div>
    <div class="after-spacer"></div>
  </div>
</template>

<style scoped>
.sidebar-incl {
  display: flex;
  flex-direction: row nowrap;
  max-width: calc(4rem + 960px);
  align-items: flex-start;
}

.sidebar-incl aside {
  flex: auto 0 0;
  margin: 1rem 1rem 0 0;
  position: sticky;
  top: 1rem;
}

.sidebar-incl .content {
  flex: 700px 1 1;
}

.sidebar-incl .after-spacer {
  width: calc(130px + 1rem);
  flex: auto 1 1;
}

@media (max-width: 1024px) {
  .sidebar-incl .after-spacer {
    display: none;
  }

  .sidebar-incl {
    flex-flow: row-reverse nowrap;
  }

  .sidebar-incl aside {
    margin: 0 0 0 1rem;
  }
}

@media (max-width: 470px) {
  .sidebar-incl aside {
    display: none;
  }
}
</style>

<script>
import CarbonAd from '@/components/CarbonAd.vue'

export default {
  components: {
    CarbonAd
  }
}
</script>
