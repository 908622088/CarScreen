<template>
  <div class="boxstyle" style="height: 345px;">
    <div class="title">实时统计</div>
    <div class="info-main">
        <ul>
            <li v-for="info in infolist" :key="info.id">
              <SvgIcon :name="info.icon" class="svgIcon"/>
              <p>{{info.title}}</p>
              <CountTo :start-val="0" :end-val="info.num" :duration="3000" class="countTo"></CountTo>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'; 
import { CountTo } from 'vue3-count-to'
const infolist = ref([
    {id:1,title:'车辆总数(辆)',num:506329,icon:'car'},
    {id:2,title:'当前在线数(辆)',num:324555,icon:'carNow'},
    {id:3,title:'今日活跃数(辆)',num:32145,icon:'active'},
    {id:4,title:'今日活跃率(%)',num:88,icon:'activeRate'}
])
</script>

<style>

</style>