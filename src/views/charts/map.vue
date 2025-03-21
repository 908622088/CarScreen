<template>
    <div class="cen-top" style="height: 650px;">
        <div class="map-num">
            <div class="title">实时行驶车辆(辆)</div>
            <CountTo :duration="3000" :startVal="0" :endVal="240898" class="num"></CountTo>
        </div>
        <div ref="chart" style=" width: 100%; height: 650px;" class="chart2"></div>
    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { CountTo } from 'vue3-count-to'
import ChinaMap from '@/assets/map-resources/china.json'
const chart = ref()
function initChart() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(chart.value)
    echarts.registerMap('China', ChinaMap)  // 注册中国地图
    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        // geo 地图配置项
        geo: {
            type: 'map',
            map: 'China',
            tooltip:{
                show:true,
            },
            label: {
                show: true,
                color: '#fff',
                fontSize: 15
            },
            itemStyle: {
                areaColor: '#577ed8',
                borderColor: '#fff',
            },
            emphasis: {
                lable: {
                    color: '#333',
                    fontSize: 16
                },
                itemStyle: {
                    areaColor: '#73c0de'
                }
            }
        },
        series: {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            symbolSize: function (params) {
                return params[2] / 600;
            },
            itemStyle: {
                color: '#7ccff0'
            },
            encode: {
                tooltip: 2
            },
            // 涟漪特效
            rippleEffect: {
                brushType:'stroke',
                scale:3
            },
            data: [
                {name:'北京', value:[116.405285,39.904989,9655]},
                {name:'汕头', value:[116.14,23.02,11254]},
                {name:'齐齐哈尔', value:[123.97,47.33,12000]},
                {name:'拉萨', value:[91.11,29.97,8622]},



            ]
        }
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
};



onMounted(() => {
    initChart()
})
</script>

<style></style>