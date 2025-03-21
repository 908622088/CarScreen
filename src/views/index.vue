<template>
    <div class="container bg">
        <div class="screen" ref="screen">
            <moduleTitle />
            <div class="main">
                <moduleFirst />
                <moduleSecond />
                <moduleThird />
            </div>
        </div>               
    </div>
</template>

<script setup>
import moduleTitle from './moduleTitle.vue';
import moduleFirst from './moduleFirst.vue';
import moduleSecond from './moduleSecond.vue';
import moduleThird from './moduleThird.vue';
import { onMounted, ref,onUnmounted } from 'vue';
import { debounce } from 'lodash-es'; //防抖

let screen = ref()
//屏幕适配
const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
}
// 监听容器大小
const handleResize = debounce(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
},300);

// 组件挂载时添加监听事件
onMounted(() => {
    window.addEventListener('resize',handleResize) // 监听窗口大小变化（变化时调用handleResize）
    handleResize()  // 在组件挂载时立即调用 handleResize 函数，确保初始状态正确。
}) 
// 组件卸载时清理
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});


</script>

<style>

</style>