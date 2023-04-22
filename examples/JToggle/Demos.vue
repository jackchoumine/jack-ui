<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 22:42:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 00:13:48
 * @Description : 
-->
<script lang="ts" setup>
import { ref } from 'vue'
// 本地导入
import { JToggle } from '../../components'
const open = ref(true)
</script>

<template>
  <div class="j-toggle-demos">
    <h1>j-toggle 例子</h1>
    <h2>demo1</h2>
    <j-toggle v-model="open" />
  </div>
</template>

<style scoped lang="scss">
.j-toggle-demos {
  // scss code
}
</style>
