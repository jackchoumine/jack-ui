<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 21:44:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 02:52:33
 * @Description : 
-->
<script setup>
import { ref } from 'vue'
// import JSplitPane from './JSplitPane.vue'
const value = ref(0.3)
</script>

<template>
  <Story title="Components/JSplitPane">
    <div class="j-split-pane-demos">
      <j-split-pane v-model="value">
        <template #left>
          <div>
            <p>left</p>
          </div>
        </template>
        <template #right>
          <div>
            <p>right</p>
          </div>
        </template>
      </j-split-pane>
    </div>
  </Story>
</template>

<style scoped lang="scss">
.j-split-pane-demos {
  height: 400px;
}
</style>

<docs lang="md">
## 分割面板
</docs>
