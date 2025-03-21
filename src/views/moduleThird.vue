<template>
<div class="Module-box" style="flex:0 1 25%">
    <StackedAreaChart />
    <RadarChart />
    <LineBarChart />
</div>
</template>

<script setup>
import StackedAreaChart from './charts/StackedAreaChart.vue';
import RadarChart from './charts/RadarChart.vue';
import LineBarChart from './charts/LineBarChart.vue';
</script>

<style>

</style>