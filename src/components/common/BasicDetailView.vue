<!--suppress ALL -->
<template>
    <div class="Detail">
        <div class="basicDetail">
            <div class="wrapperDetail">
                <el-row>
                    <div class="line_buttom"/>
                </el-row>
                <el-row>
                    <li class="ul_center d_li">
                        <PanelGroup :count="count" @handleSetLineChartData="handleSetLineChartData"/>
                    </li>
                    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
                        <LineChart :chartData="returnChartData"/>
                    </el-row>
                </el-row>
                <el-row>
                    <div class="line_middle"/>
                </el-row>

                <el-row class="g-description">
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left">
                            完成时间:
                        </el-col>
                        <el-col type="flex" justify="space-between">
                            <el-progress :percentage="100"/>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="start">

                        <el-col :span="3">还款方式:</el-col>
                        <el-col :span="5">
                            先息后本
                            <el-popover
                                    placement="right-start"
                                    title="标题"
                                    width="200"
                                    trigger="hover"
                                    content="这边是提示">
                                <i slot="reference" class="el-icon-question"/>
                            </el-popover>
                        </el-col>

                        <el-col :span="3" :offset="9">计息时间:</el-col>
                        <el-col :span="4">
                            出借成功后计息
                            <el-popover
                                    placement="right-start"
                                    title="标题"
                                    width="200"
                                    trigger="hover"
                                    content="这边是提示">
                                <i slot="reference" class="el-icon-question"/>
                            </el-popover>
                        </el-col>

                    </el-row>
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left">还款日期:</el-col>
                        <el-col :span="10">
                            每出借<b style="color:orange">100</b>元，<b style="color:orange">每日</b>可获得利息收益<b
                                style="color:orange">0.0247</b>元
                        </el-col>
                        <el-col :span="3" :offset="7">
                            <el-button type="primary" plain round size="mini" @click="dialogVisible = true">借款协议
                            </el-button>
                            <el-dialog
                                    :visible.sync="dialogVisible"
                                    :before-close="handleClose"
                                    class="dialog_body"
                                    title="提示"
                                    width="30%">
                <span>这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n
                这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n这是一段信息\n
                这是一段信息\n这是一段信息\n这是一段信息这是一段信息\n这是一段信息\n这是一段信息\n</span>
                                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
                            </el-dialog>
                        </el-col>

                    </el-row>
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="left"><b>温馨提示：</b></el-col>
                        <el-col :span="20" class="left"><b>市场有风险，出借需谨慎</b></el-col>
                    </el-row>
                </el-row>
                <el-row>
                    <div class="line"/>
                </el-row>

            </div>
        </div>
        <div class="basicDetailCard">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleCardClick">
                <el-tab-pane label="借款详情" name="first">
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>
                    <el-card class="box-card" shadow="always">
                        <el-row>
                            <el-row>
                                <i class="el-icon-info box-icon"/>
                                <span class="project-title">
                  <b>项目介绍</b>
                </span>
                            </el-row>
                            <div class="project-content">
                                <el-row>
                                    <el-col :span="3">
                                        项目描述：
                                    </el-col>
                                    <el-col :span="21">
                                        车商贷是在汽车供应链环节中的采购阶段基于商品交易订单（预付账款）而产生的短期融资业务，资金专项用于车商采购车辆，
                                        风险控制直接渗透到供应链企业的经营环节，通过对车辆及车辆合规证明材料的实际控制来把控风险。
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借&nbsp;&nbsp;款&nbsp;&nbsp;方：
                                    </el-col>
                                    <el-col :span="21">
                                        金沙****责任公司
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        借款用途：
                                    </el-col>
                                    <el-col :span="21">
                                        采购新车
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流：
                                    </el-col>
                                    <el-col :span="21">
                                        本地自提
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3">
                                        保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;险：
                                    </el-col>
                                    <el-col :span="21">
                                        /
                                    </el-col>
                                </el-row>
                            </div>
                        </el-row>

                    </el-card>

                </el-tab-pane>
                <el-tab-pane label="出借记录" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="还款详情" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="产品介绍" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
  /* eslint-disable */
  import PanelGroup from './PanelGroup';
  import LineChart from './LineChart';

  export default {
    name: 'basic-detail-view',
    components: {
      PanelGroup,
      LineChart
    },
    props: ['detailData'],
    data () {
      return {
        lineChartData: [
          {
            expectedData: [101, 120, 161, 134, 105, 160, 165, 120, 161, 134, 105, 160, 165],
            actualData: [120, 82, 91, 154, 162, 140, 145, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [200, 192, 120, 144, 160, 130, 140, 120, 161, 134, 105, 160, 165],
            actualData: [180, 160, 151, 106, 145, 150, 130, 120, 161, 134, 105, 160, 165]
          },
          {
            expectedData: [80, 100, 121, 104, 105, 90, 100, 120, 161, 134, 105, 160, 165],
            actualData: [120, 90, 100, 138, 142, 130, 130, 120, 161, 134, 105, 160, 165]
          }
        ],
        count: [
          {
            name: '历史周期',
            startVal: 0,
            endVal: 8.4,
            decimal: true
          },
          {
            name: '周期',
            startVal: 0,
            endVal: 900000
          },
          {
            name: '金额',
            startVal: 0,
            endVal: 192000
          }
        ],
        dialogVisible: false,
        activeName: 'first',
        returnChartData :{xAxisName: "表名", actualData: [1,2,3,0], type: Number}
      };
    },
    methods: {
      handleClose (done) {
        this.$confirm('sure?').then(_ => {
          done();
        }).catch(_ => {});
      },
      handleCardClick (tab, event) {
        console.log(tab, event);
      },
      handleSetLineChartData (type) {
        this.returnChartData = this.lineChartData[type];
      },
      mounted () {
        this.returnChartData = this.lineChartData[0];
      }
    }
  };
</script>

<style scoped lang="scss">
    .Detail {
        margin: 0 50px;
    }

    .basicDetail {
        background-color: white;

        .wrapperDetail {
            padding-bottom: 12px;
            .line_buttom {
                height: 14px;
                border-bottom: 1px dotted #C0C0C0;
            }
            .line_middle {
                height: 7px;
                border-top: 1px dotted #C0C0C0;
            }
        }
    }

    .basicDetailCard {
        background-color: white;
        width: 100%;
        margin: 20px 0;
        border: 1px solid #f8f8f8;
        .project-title {
            font-size: 28px;
        }
        .box-icon {
            font-size: 18px;
            margin-right: 6px;
        }
        .project-content {
            margin-left: 25px;
        }
    }

    .g-description {
        padding: 10px 50px;
    }

    .left {
        color: grey;
    }

    .d_li {
        border: 0;
        text-align: left;
        .li_top {
            display: block;
            font-size: 14px;
            color: grey;
            line-height: 18px;
            font-size: 14px;
        }
        .li_buttom {
            display: block;
            color: #f60;
            line-height: 80px;
            font-size: 40px;
        }
    }

    .el-dialog {
        display: flex !important;
        flex-direction: column !important;
        .el_dialog__body {
            overflow: auto !important;
        }
    }


</style>
