<template>
    <div class="boxstyle" style="height: 300x;">
        <div class="title">行业分类</div>
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
        // 提示框组件
        tooltip: {
            trigger: 'item',
            // formatter: '{b}: {c} ({d}%)'
        },
        // 图例组件
        legend: {
            top: '5%',
            right: 'right',
            orient: 'vertical', // 图例布局
            textStyle:{
                color:'#fff',
                fontSize: 18,
            }

        },
        
        series: [
            {
                name: '',
                type: 'pie',
                // 饼图的半径
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                // 饼图标签
                label: {
                    show: true,
                    position: 'inside',
                    formatter:'{d}%',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#fff'
                },
                // 高亮状态下的样式（如鼠标悬停）
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 20,
                        fontWeight: 'bold',
                        
                    }
                },
                // 标签连接线的样式
                labelLine: {
                    show: true
                },
                data: [
                    { value: 1048, name: '行业一' },
                    { value: 735, name: '行业二' },
                    { value: 580, name: '行业三' }
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