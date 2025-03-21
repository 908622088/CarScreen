<template>
    <div class="boxstyle" style="height: 300x;">
        <div class="title">车型分类</div>
        <div ref="chart" style=" width: 100%; height: 250px;" class="chart2"></div>
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
        tooltip: {
            trigger: 'item'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            orient: 'vertical',
            data: [
                'rose1',
                'rose2',
                'rose3',
                'rose4',
                'rose5',
                'rose6',
                'rose7',
                'rose8'
            ]
        },
        series: [

            {
                type: 'pie',
                radius: [30, 120],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: '600',
                    color: '#fff'
                    
                },
                data: [
                    { value: 30, name: '旅游客车' },
                    { value: 28, name: '公务员乘用车' },
                    { value: 26, name: '私人乘用车' },
                    { value: 24, name: '出租车' },
                    { value: 22, name: '工程特种车' },
                    { value: 20, name: '酒店客车' },
                    { value: 18, name: '物流用车' },
                    { value: 16, name: '公交车' }
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