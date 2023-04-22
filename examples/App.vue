<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 20:58:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-22 23:40:21
 * @Description : 
-->
<script setup lang="ts">
import { JToggleDemos } from './JToggle'
import JSplitPaneDemos from './JSplitPane/Demos.vue'
</script>

<template>
  <div>
    <JToggleDemos />
    <JSplitPaneDemos />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
