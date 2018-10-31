<!--suppress ALL -->
<template>
    <div class="admin-overview" style="width: 100%">
        <panel-group :count="count" @handleSetLineChartData="handleSetLineChartData"/>
        <line-chart :chart-data="chartData"/>
    </div>
</template>

<script>
  import PanelGroup from './PanelGroup';
  import LineChart from './LineChart';

  const chartData = {
    allBuy: {
      expectedData: [100, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145, 120, 161, 134, 105, 160, 165]
    },
    allSell: {
      expectedData: [100, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
      actualData: [180, 160, 151, 106, 145, 150, 130, 120, 161, 134, 105, 160, 165]
    }
  };
  const count={
    historyYear: {
      startVal: 0,
      endVal: 8.4
    },
    period: {
      startVal: 0,
      endVal: 900000
    },
    money: {
      startVal: 0,
      endVal: 192000
    }
  };

  export default {
    name: 'AdminOverview',
    components: {LineChart, PanelGroup},
    props: ['title'],
    data () {
      return {
        chartData: chartData,
        count:count
      };
    },
    methods:{
      handleSetLineChartData(type){
        this.chartData = chartData[type];
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
