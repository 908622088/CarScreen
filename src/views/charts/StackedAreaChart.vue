<template>
    <div class="boxstyle" style="height: 300x;">
        <div class="title">车辆运行峰段分布情况</div>
        <div ref="chart" style=" width: 100%; height: 350px;" class="chart2"></div>
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
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['白天行驶车辆', '夜间行驶车辆', '高峰行驶车辆', '平峰行驶车辆'],
            textStyle: {
                color: '#fff',
                fontSize: '12'
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            top:'10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                }
            }
        ],
        series: [
            {
                name: '白天行驶车辆',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '夜间行驶车辆',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '高峰行驶车辆',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '平峰行驶车辆',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
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