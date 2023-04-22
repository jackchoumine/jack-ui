<!--
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 21:44:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 02:44:56
 * @Description : 
-->
<!-- Meow.story.vue -->
<script setup>
import { ref } from 'vue'
// import JToggle from './JToggle.vue'
// import './j-toggle.scss'
const open = ref(true)
</script>

<template>
  <Story title="Form/JToggle">
    <Variant title="基本使用">
      <JToggle />
    </Variant>
    <Variant title="绑定v-model">
      <JToggle v-model="open" />
      <template #controls>
        <HstCheckbox v-model="open" title="open" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## toggle 切换

微信的切换按钮
</docs>
