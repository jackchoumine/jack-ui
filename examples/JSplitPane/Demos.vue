<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 23:35:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 04:00:31
 * @Description : JSplitPane Demos
-->
<script lang="ts" setup name="j-split-pane-demos">
import { ref } from 'vue'
const value = ref(0.3)
const open = ref(true)
</script>

<template>
  <div class="j-split-pane-demos">
    <h1>j-split-pane例子</h1>
    <div>
      <j-split-pane v-model="value">
        <template #left>
          <div>
            <p>left</p>
          </div>
        </template>
        <template #right>
          <div>
            <p>right</p>
            <JToggle v-model="open" />
            <p>{{ open }}</p>
          </div>
        </template>
      </j-split-pane>
    </div>
  </div>
</template>

<style scoped lang="scss">
.j-split-pane-demos {
  // scss code
  div {
    height: 400px;
  }
}
</style>
