<template>
    <dv-border-box-8 class="scrollBox">
        <div class="scrollTitle">
            <div class="title">事故发生榜</div>
            <dv-decoration-3 style="width:250px;height:30px;" />
        </div>
        <div class="scrollContent">
            <dv-scroll-board ref="scrollBoard" 
            style="width: 100%; height: 240px;"
            :config="config" 
            @mouseover="mouseoverHandler"
            @click="clickHandler" />
        </div>
    </dv-border-box-8>
</template>

<script setup>
import { ref, reactive } from 'vue'
const date = new Date().toLocaleString()
const config = reactive({
    header: ['事件', '发生地点', '时间'],
    data: [
        ['车辆故障', '广东深圳', date],
        ['车辆故障', '广东汕头', date],
        ['车辆故障：轮胎损坏', '广东广州', date],
        ['车辆故障', '上海', date],
        ['车辆故障', '四川成都', date],
        ['车辆故障', '重庆', date],
        ['车辆故障：轮胎损坏', '广东东莞', date],
        ['车辆故障', '北京', date],
        ['车辆故障', '天津', date],
        ['车辆故障：熄火', '北京', date],
    ],
    index: true,
    columnWidth: [50,500,200,150],
    columnHeight: 20,
    align: ['center'],
    headerHeight: 30,
    hoverPause: true,
    waitTime: 1000,
    headerBGC: '#090114',
    oddRowBGC: '#090d1d',
    evenRowBGC: '#090114'
})

const mouseoverHandler = (e) => {
    console.log(e)
}

const clickHandler = (e) => {
    console.log(e)
}

const scrollBoard = ref(null)
</script>

<style>
.dv-border-box-8 {
    height: 300px;
    margin-bottom: 15px;
}

.scrollTitle {
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}
.scrollTitle .title {
    margin-top: 5px;
}
.scrollContent {
    margin: 5px 10px 10px 10px;
}

.dv-scroll-board .header {
    height: 30px;
}
.dv-scroll-board .header-item {
    color: #fff;
    font-weight: bold;
}
</style>