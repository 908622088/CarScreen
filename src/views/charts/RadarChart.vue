<template>
    <div class="boxstyle" style="height: 280px;">
        <div class="title">事故预警</div>
        <div ref="chart" style="width: 100%; height: 220px;" class="chart2"></div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const chart = ref()
function initChart() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(chart.value)
    // 指定图表的配置项和数据
    var option = {
        legend: {
            data: ['事故1'],
            show: false,
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '1月', max: 20 },
                { name: '2月', max: 20 },
                { name: '3月', max: 20 },
                { name: '4月', max: 20 },
                { name: '5月', max: 20 },
                { name: '6月', max: 20 },
                { name: '7月', max: 20 },
                { name: '8月', max: 20 },
                { name: '9月', max: 20 },
                { name: '10月', max: 20 },
                { name: '11月', max: 20 },
                { name: '12月', max: 20 }
            ],
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#133d8572','#0087b9']
                }
            },
            axisLable: {
                color: '#fff'
            },
            axisName: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '12'
            },


        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [10, 20, 5, 11, 15, 11,10, 12, 4, 11, 8, 11],
                        name: '事故1',
                        areaStyle: {
                            color: '#03a5ac'
                        },
                        itemStyle: {
                            color: '#03a5ac'
                        }
                        
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
onMounted(() => {
    initChart()
})
</script>

<style></style>