<template>
  <svg
    :class="['svg-icon', customClass]"
    :style="{ width: `${width}px`, height: `${height}px`, color }"
    v-bind="$attrs"
  >
    <use :xlink:href="symbolId" :width="width" :height="height" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 48
  },
  height: {
    type: Number,
    default: 48
  },
  color: {
    type: String,
    default: '#333'
  },
  customClass: {
    type: String,
    default: ''
  }
})

// 计算图标的 id
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style scoped>
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
  stroke: currentColor;
  overflow: hidden;
}
</style>