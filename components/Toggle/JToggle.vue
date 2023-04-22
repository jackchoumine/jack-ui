<!--
 * @Description : JToggle
 * @Date        : 2023-02-18 21:29:10 +0800
 * @Author      : JackChou
 * @LastEditTime: 2023-04-22 23:13:48
 * @LastEditors : ZhouQiJun
-->
<template>
  <span
    class="j-toggle"
    tabindex="0"
    role="checkbox"
    :aria-checked="isOpen"
    @click="toggle"
    @keydown.space.prevent="toggle"
  >
  </span>
</template>

<!--  name="JToggle" -->
<script setup lang="ts" name="JToggle">
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// const isOpen = computed({
//   get() {
//     return props.modelValue
//   },
//   set(val) {
//     emit('update:modelValue', val)
//   }
// })

// function toggle() {
//   isOpen.value = !isOpen.value
// }

// NOTE 这是不行的，ref 只在 setup 执行时执行，即只执行一次
// const isOpen = ref(props.modelValue)
// computed 会在每次依赖变化时执行
const isOpen = computed(() => props.modelValue)

// watch(
//   () => props.modelValue,
//   (val) => {
//     console.log('watch modelValue', val)
//   }
// )

// watch(
//   isOpen,
//   (val) => {
//     console.log('watch isOpen', val)
//   },
//   {
//     immediate: true
//   }
// )

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>
