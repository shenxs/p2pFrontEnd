<template>
    <div class="g-index">
        <el-container style="border: 2px solid #eee">
            <el-aside width="350px">
                ss11
            </el-aside>
            <div class="g-main">
                <div class="g-slogon">
                    <marquee class="g-slogon-text"> 你不贷，我不贷，明天我们就狗带！</marquee>
                </div>
                <div clas="g-slogan"></div>
                <div class="g-carousel">
                    <el-carousel height="360px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <p>{{ item }}</p>
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="g-loan">
                    <div class="g-sell ">
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span>贷款</span>
                                <el-button style="float: right; padding: 3px 0" type="text" @click="goto('/sell')">
                                    更多
                                </el-button>
                            </div>
                            <mini-table :tableData="sellTable.data" :labels="sellTable.labels"/>
                        </el-card>
                    </div>
                    <div class="g-buy">
                        <el-card class="box-card" shadow="always">
                            <div slot="header" class="clearfix">
                                <span>借款</span>
                                <el-button style="float: right; padding: 3px 0"
                                           type="text" @click="goto('/buy')">更多
                                </el-button>
                            </div>
                            <mini-table :tableData="buyTable.data" :labels="buyTable.labels"/>

                        </el-card>
                    </div>

                </div>
            </div>
        </el-container>

    </div>
</template>

<script>
  import miniTable from '../common/MiniTable';
  import api from '../../api/api';

  export default {
    name: 'MainIndex',
    components: {miniTable},
    data () {
      return {
        sellTable: {
          data: undefined,
          labels: {
            sellName: '借款目的',
            moneyNum:'总额',
            interest: '利率',
            period: '周期'

          }
        },
        buyTable: {
          data: undefined,
          labels: {
            buyName: '贷款目的',
            moneyNum:'总额',
            interest: '利率',
            period: '周期'
          }
        }
      };
    },
    methods: {
      goto (url) {
        this.$router.push(url);
      },
      loadData () {
        const data = {pageNow: 1, pageSize: 6};
        api.getSellByPage(data).then(re => {
          // eslint-disable-next-line
          console.log(re);
          this.sellTable.data = re.data.data.content;
        }).catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });

        api.getBuyByPage(data).then(re => {
          // eslint-disable-next-line
          console.log(re);
          this.buyTable.data = re.data.data.content;
        }).catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
      }
    },
    beforeMount () {
      this.loadData();

    }
  };
</script>

<style lang="scss" scoped>
    .g-main {
        width: 90%;
        min-height: 500px;
        .el-aside {
            margin: 10px;
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 100px;
        }
        .g-slogon {
            margin: 10px;
            background-color: aqua;

            height: 40px;

            .g-slogon-text {
                font-size: 20px;
                line-height: 40px;
            }
        }
    }

    .g-inner {
        /*min-height: 100px;*/

    }

    .g-carousel {
        margin: 10px;
        .el-carousel__item p {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 300px;
            margin: 0;
            text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }

    .g-loan {
        margin: 10px;
        display: flex;
        .g-sell {
            width: 100%;
            margin-right: 5px;
        }
        .g-buy {
            width: 100%;
            margin-left: 5px;
        }

    }


</style>
