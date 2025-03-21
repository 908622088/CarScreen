<template>
   <div class="Module-box" style="flex: 0 1 25%;">
      <CountChart />  
      <PieChart />
      <NightingaleChart />
   </div>
</template>

<script setup>
import CountChart from './charts/CountChart.vue';
import PieChart from './charts/PieChart.vue';
import NightingaleChart from './charts/NightingaleChart.vue';
</script>

<style>

</style>