<template>
  <el-row :gutter="80" class="panel-group">

    <el-col :xs="12" :sm="14" :lg="10" class="card-panel-col" v-for="(everycount,index) in count"
            :key="everycount.name">
      <div class="card-panel" @click="handleSetLineChartData(index)">
        <div class="card-panel-icon-wrapper icon-people">
          <img src="../svg/money.svg" class="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">{{everycount.name}}</div>
          <count-to
            :start-val="everycount.startVal"
            :end-val="everycount.endVal"
            :duration="2800"
            :decimals="everycount.decimal?1:0"
            class="card-panel-num"/>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  /* eslint-disable */
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  props:['count'],
  data() {
    return {

      typeChartData : {
        history:0,
        period:1,
        money:2
      }
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .panel-group {
        margin-top: 18px;
        .card-panel-col {
            margin-bottom: 32px;
        }
        .card-panel {
            height: 108px;
            cursor: pointer;
            font-size: 12px;
            position: relative;
            overflow: hidden;
            color: #666;
            background: #fff;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
            border-color: rgba(0, 0, 0, .05);

            &:hover {
                .card-panel-icon-wrapper {
                    color: #fff;
                }
                .icon-people {
                    background: #40c9c6;
                }
                .icon-message {
                    background: #36a3f7;
                }
                .icon-money {
                    background: #f4516c;
                }
                .icon-shopping {
                    background: #34bfa3
                }
            }
            .icon-people {
                color: #40c9c6;
            }
            .icon-message {
                color: #36a3f7;
            }
            .icon-money {
                color: #f4516c;
            }
            .icon-shopping {
                color: #34bfa3
            }
            .card-panel-icon-wrapper {
                float: left;
                margin: 14px 0 0 14px;
                padding: 16px;
                transition: all 0.38s ease-out;
                border-radius: 6px;
            }
            .card-panel-icon {
                float: left;
                font-size: 24px;
              width: 55px;
              height: 55px;
            }
            .card-panel-description {
                float: right;
                font-weight: bold;
                margin: 26px;
                margin-left: 0px;
                .card-panel-text {
                    line-height: 18px;
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 16px;
                    margin-bottom: 12px;
                }
                .card-panel-num {
                    font-size: 20px;
                }
            }
        }
    }
</style>
