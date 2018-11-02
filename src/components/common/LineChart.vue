<template>
    <div :class="className" :style="{height:height,width:width}" style="padding-top: 20px"/>
</template>

<script>
  /* eslint-disable */
  import echarts from 'echarts'

  require('echarts/theme/macarons') // echarts theme
  // import { debounce } from '../../utilss'

  export default {
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      // autoResize: {
      //   type: Boolean,
      //   default: true
      // },
      chartData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        chart: null
      }
    },
    watch: {
      chartData: function (val) {
        this.setOptions(val)
      }
    },
    mounted () {
      this.initChart()
      // if (this.autoResize) {
      //   this.__resizeHandler = debounce(() => {
      //     if (this.chart) {
      //       this.chart.resize()
      //     }
      //   }, 100)
      //   window.addEventListener('resize', this.__resizeHandler)
      // }
    },
    beforeDestroy () {
      if (!this.chart) {
        return
      }
      // if (this.autoResize) {
      //   window.removeEventListener('resize', this.__resizeHandler)
      // }

      // const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
      // sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

      this.chart.dispose()
      this.chart = null
    },
    methods: {
      // sidebarResizeHandler(e) {
      //   if (e.propertyName === 'width') {
      //     this.__resizeHandler()
      //   }
      // },
      setOptions ({xAxisName, actualData,type} = {}) {
        let t = type==0?"总购":"总贷"
        console.log("type is",type,t)
        this.chart.setOption({
          xAxis: {
            data: xAxisName,
            boundaryGap: false,
            axisLabel: {
              formatter:function (val) {
                return val.split("-").join("\n")
              }
            },
            axisTick: {
              show: false
            }
          },
          toolbox: {
            show: true, //是否显示工具栏组件
            // orient: 'vertical', //工具栏icon的布局朝向
            itemSize: 18, //工具栏icon的大小
            itemGap: 20, //item之间的间距
            right: -5, //toolbox的定位位置
            feature: {
              saveAsImage: {show: true}, //导出图片
              dataView: {show: true}, //数据视图
              magicType: { //动态类型切换
                type: ['line', 'bar', 'stack', 'tiled']
              },
              dataZoom: {show: true}, //数据区域缩放
              restore: {show: true}, //重置
            }
          },
          dataZoom: {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          title: {
            show: true, //显示折线图
            text: xAxisName[0].replace('-','/') + '-' + xAxisName[xAxisName.length - 1].replace('-','/') + "期间[ "+ t +" ]金额变化图", //标题文字
            // subtext: '熟悉title的配置项', //副标题
            left: 50, //配置title的位置
            // padding: [5,20,5,10] //title的padding值
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          // legend: {
          //   data: ['expected', 'actual']
          // },
          series: [
            // {
            //   name: 'expected', itemStyle: {
            //     normal: {
            //       color: '#FF005A',
            //       lineStyle: {
            //         color: '#FF005A',
            //         width: 2
            //       }
            //     }
            //   },
            //   smooth: true,
            //   type: 'line',
            //   data: expectedData,
            //   animationDuration: 2800,
            //   animationEasing: 'cubicInOut'
            // },
            {
              name: 'actual',
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#3888fa',
                  lineStyle: {
                    color: '#3888fa',
                    width: 2
                  },
                  areaStyle: {
                    color: '#f3f8ff'
                  }
                }
              },
              data: actualData,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }]
        })
      },
      initChart () {
        this.chart = echarts.init(this.$el, 'macarons')
        console.log("lineChart get Data: ", this.chartData)
        this.setOptions(this.chartData)
      }
    }
  }
</script>
