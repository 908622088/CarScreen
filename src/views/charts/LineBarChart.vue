<template>
    <div class="boxstyle" style="height: 300px;">
        <div class="title">行业分类</div>
        <div ref="chart" style=" width: 100%; height: 300px;" class="chart2"></div>
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
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['出警里程', '出警次数', '巡逻次数'],
    textStyle: {
        color: '#fff',
        fontSize: '14'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      },
      axisLabel: {
        color: '#fff'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '里程',
      min: 0,
      max: 500,
      interval: 100,
      axisLabel: {
        formatter: '{value}',
        color: '#fff'
      },
      nameTextStyle: {
        color: '#fff'
      }
    },
    {
      type: 'value',
      name: '次数',
      min: 0,
      max: 50,
      interval: 10,
      axisLabel: {
        formatter: '{value}',
        color: '#fff'
      },
      nameTextStyle: {
        color: '#fff'
      }

    }
  ],
  series: [
    {
      name: '出警里程',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' km';
        }
      },
      data: [
        400, 420, 100, 333, 250, 400, 420, 100, 333, 250, 400, 420
      ]
    },
    {
      name: '出警次数',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '次';
        }
      },
      data: [
        40, 11, 35, 14, 42, 33, 29, 18, 48, 18, 6, 23
      ]
    },
    {
      name: '巡逻次数',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value+ '次';
        }
      },
      data: [20, 31, 25, 44, 16, 14, 22, 32, 33, 45, 36, 27]
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