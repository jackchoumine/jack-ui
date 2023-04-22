<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 23:35:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 00:12:43
 * @Description : JSplitPane Demos
-->
<script lang="ts" setup name="j-split-pane-demos">
import { ref } from 'vue'
import { JSplitPane, JToggle } from '../../components'
const value = ref(0.3)
const open = ref(true)
</script>

<template>
  <div class="j-split-pane-demos">
    <h1>j-split-pane例子</h1>
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
</template>

<style scoped lang="scss">
.j-split-pane-demos {
  // scss code
  height: 400px;
}
</style>
