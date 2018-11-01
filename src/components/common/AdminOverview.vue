<!--suppress ALL -->
<template>
    <div class="admin-overview" >
        <div class="overview">
            <PanelGroup :count="count" @handleSetLineChartData="handleSetLineChartData"/>
        </div>
        <div class="block timeSelect">
            <span class="demonstration"></span>
            <el-date-picker
                    v-model="chooseTime"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd HH:MM:SS"
                    :default-time="['00:00:00', '23:59:59']"
                    :default-value="defaultTime"
                    :picker-options="pickerOptions2">
            </el-date-picker>
            <el-select v-model="choosePeriod" placeholder="请选择查询周期">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        @change="changePeriod"
                        >
                </el-option>
            </el-select>
            <el-button type="primary" class="timeSelect-buttom" @click="initChartData">查询</el-button>
        </div>
        <div class="linechart">
            <LineChart :chartData="returnChartData"/>
        </div>
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
        options: [{
          value: '0',
          label: '按日查询'
        }, {
          value: '1',
          label: '按月查询'
        }, {
          value: '2',
          label: '按年查询'
        }],
        choosePeriod:'1',
        chartData: [
          {
            xAxisName: ["2014", "2015", "2016", "2017"],
            actualData: [120, 82, 91, 154]
          },
          {
            xAxisName: ["2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08"],
            actualData: [180, 160, 151, 106, 145, 150]
          }
        ],
        count: [
          {
            name: "历史总贷成交量",
            startVal: 0,
            endVal: 0
          },
          {
            name: "历史总购成交量",
            startVal: 0,
            endVal: 0
          }
        ],
        returnChartData: {},
        getYearBuy: {"type": 0, "period": 2},
        getYearSell: {"type": 1, "period": 2},
        getMoneyByYear: {
          "type": "0",
          "period": "1",
          "startTime": "2015-03-27 16:00:00",
          "endTime": "2018-08-27 16:00:00"
        },
        pickerOptions2: {
          shortcuts: [
            {
              text: '最近一周',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick (picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
        },
        chooseTime: ['2015-03-27 16:00:00','2015-08-27 16:00:00'],
        defaultTime:['2015-03-27 16:00:00','2015-08-27 16:00:00']

      };
    },
    methods: {
      handleSetLineChartData (type) {
        this.returnChartData = this.chartData[type];
      },
      initGetMoney () {

        api.getMoney(this.getYearBuy).then(res => {
          console.log(res)
          this.count[0].endVal = parseInt(res.data.data.totalMoney)
        });
        api.getMoney(this.getYearSell).then(res => {
          this.count[1].endVal = parseInt(res.data.data.totalMoney)
        });

      },
      initChartData () {
        this.getMoneyByYear.startTime=this.chooseTime[0]
        this.getMoneyByYear.endTime=this.chooseTime[1]
        this.getMoneyByYear.period = this.choosePeriod
        this.getChartData()
      },
      getChartData(){
        api.getMoneyByTime(this.getMoneyByYear).then(res => {
          var axis = []
          var money = []
          for (var [k, v] of res.data.data) {
            axis.push(k)
            money.push(v)
          }
          this.returnChartData = {"xAxisName":axis, "actualData":money}
        })

      },
      changePeriod(){

        this.getMoneyByYear.period = this.choosePeriod
        console.log(this.choosePeriod)
        this.getChartData()
      }

    },
    beforeMount () {
      this.initGetMoney();
      this.returnChartData=this.chartData[0];
    },
    mounted () {

    }

  };
</script>

<style lang="scss" scoped>


    .admin-overview {
        display: inline-block;
        .overview{
            margin-left: 0px;
        }
        .timeSelect{
            margin: 0px 0px 0px 270px;
            .timeSelect-buttom{
                margin-left: 30px;
            }
        }
        .linechart{
        }
    }

</style>
