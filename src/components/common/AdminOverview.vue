<!--suppress ALL -->
<template>
    <div class="admin-overview" style="width: 100%">

        <PanelGroup :count="count" @handleSetLineChartData="handleSetLineChartData"/>
        <LineChart :chartData="returnChartData"/>
        <TestVFor :items="items"/>
    </div>
</template>

<script>

  /* eslint-disable */
  import PanelGroup from './PanelGroup';
  import LineChart from './LineChart';
  import TestVFor from './TestVFor';
  import api from '../../api/api'

  export default {
    name: 'AdminOverview',
    components: {LineChart, PanelGroup, TestVFor},
    props: ['title'],
    data () {
      return {
        items: [
          {message: 'a'},
          {message: 'b'}
        ],
        chartData: [
          {
            expectedData: [100, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [100, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
            actualData: [180, 160, 151, 106, 145, 150, 130, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [100, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
            actualData: [180, 160, 151, 106, 145, 150, 130, 120, 161, 134, 105, 160, 165]
          }
        ],
        count: [
          {
            name: "历史周期",
            startVal: 0,
            endVal: 8.4,
            decimal: true
          },
          {
            name: "周期",
            startVal: 0,
            endVal: 900000
          },
          {
            name: "金额",
            startVal: 0,
            endVal: 192000
          }
        ],
        returnChartData: {}
      };
    },
    methods: {
      handleSetLineChartData (type) {
        console.log("overview type is ", this.chartData[type])
        this.returnChartData = this.chartData[type];
      }
    },
    mounted() {
      this.returnChartData = this.chartData[0];

    }

  };
</script>

<style lang="scss" scoped>

</style>
