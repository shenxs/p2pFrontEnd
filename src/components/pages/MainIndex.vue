<template>
    <div class="g-index">
        <el-container style="border: 2px solid #eee">
            <el-aside class="g-aside" width="350px">
                <el-card v-for="(item, index) in news" :key="index" class="m-new-card">
                    <div class="u-news-img">
                        <img @click="newsClick(item)" style="height: 100px;width: 100px"
                             :src="require(`@/assets/news${index+1}.png`)"/>
                    </div>
                    <div class="u-news-text">
                        <p>{{item.text}}</p>
                    </div>
                </el-card>
            </el-aside>
            <div class="g-main">
                <div class="g-slogan">
                    <marquee class="g-slogan-text"> 你不贷，我不贷，明天我们就狗带！</marquee>
                </div>
                <div class="g-middle">
                    <div class="g-carousel">
                        <el-carousel height="370px">
                            <el-carousel-item v-for="item in 3" :key="item">
                                <img :src="require(`@/assets/${item}.jpg`)"/>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="g-hot">
                        <div class="bg">
                            <div class='frosted-glass'></div>
                            <div class="g-hot-title">
                                安全运营: <span style="font-size: 40px"> 1000 </span> 天
                                <el-row>
                                    <div class="line_middle"/>
                                </el-row>
                            </div>
                            <div class="g-hot-histroy">
                                <div class="ll" style="color: orangered;font-size: 36px"> 7% ~ 15%</div>
                                <div class="history" style="color: white;font-size: 24px;line-height: 20px"> 历史年化
                                </div>
                                <div class="register" style="margin-top: 20px">

                                    <el-button type="primary" size="medium" @click="goto('/register')"
                                               style="width: 80%; font-size:32px ;height: 60px;">注册
                                    </el-button>
                                </div>
                                <div class="login" style="font-size: 16px;line-height: 20px">
                                    已有账号？
                                    <a href="#/login">立即登录</a>
                                </div>

                            </div>
                            <div class="notice">
                                <el-row type="flex" justify="start">
                                    <el-col :span="2">
                                        <el-icon class="el-icon-phone-outline"
                                                 style="line-height: 30px;margin-left:10px"></el-icon>
                                    </el-col>
                                    <el-col :span="19">
                                        <ul id="con1" ref="con1" :class="{anim:animate==true}">
                                            <li v-for='item in items' :key="item.name">{{item.name}}</li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="2" style="line-height: 30px;margin-left:10px">
                                        <a @click="goto('/buy')"> 更多 </a>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
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
    data () {
      return {
        animate: false,
        items: [
          {name: ' 金额20万， 期限90天， 历史年化12.1%'},
          {name: ' 金额40万， 期限30天， 历史年化12.1%'},
          {name: ' 金额90万， 期限180天， 历史年化12.1%'}
        ],
        sellTable: {
          data: undefined,
          labels: {
            sellName: '借款目的',
            moneyNum: '总额',
            interest: '利率',
            period: '周期'

          }

        },
        buyTable: {
          data: undefined,
          labels: {
            buyName: '贷款目的',
            moneyNum: '总额',
            interest: '利率',
            period: '周期'
          }
        },
        news: [
          {
            text: '五大官方信号看懂明年经济！县城房价降40%？养老金4000亿入市？',
            path: '../../assets/news1.png',
            utl: ''
          }, {
            text: '百亿央票出海在即：人民币跳涨 投机做空不容易',
            path: '../../assets/news1.png',
            url: 'https://finance.sina.com.cn/money/forex/rmb/2018-11-01/doc-ihnfikve0782819.shtml'
          }, {
            text: '天猫昨天发布双11价格保护机制 确保到手价为近3个月最低',
            path: '../../assets/news1.png',
            url: 'http://www.xinhuanet.com//tech/2018-10/30/c_1123634879.htm'
          }, {
            text: '世行营商环境报告 中国排名上升32位',
            path: '../../assets/news1.png',
            url: 'https://finance.sina.com.cn/stock/usstock/c/2018-11-01/doc-ifxeuwwt0061154.shtml'
          }, {
            text: '五险一金将建“黑名单”制度 这些行为会被惩戒',
            path: '../../assets/news1.png',
            url: 'http://www.xinhuanet.com//yuqing/2018-10/31/c_129982022.htm'
          }, {
            text: '全球股市以反弹结束6年来最糟糕月度行情',
            path: '../../assets/news1.png',
            url: 'https://finance.sina.com.cn/stock/usstock/c/2018-11-01/doc-ifxeuwwt0062314.shtml'
          }
        ]
      };
    },
    created () {
      setInterval(this.scroll, 1000);
    },
    components: {miniTable},
    methods: {
      goto (url) {
        this.$router.push(url);
      },
      scroll () {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500);
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
      },
      newsClick (item) {
        // eslint-disable-next-line
        console.log('hhh');
        if (item.url !== '')
          window.open(item.url);
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
        .g-aside {
            margin: 10px;
            .m-new-card {
                display: flex;
                & + .m-new-card {
                    margin-top: 15px;
                }
                .u-news-img, .u-news-text {
                    display: inline-block;
                    width: 100px;
                    vertical-align: middle;
                }
                .u-news-img {
                    font-size: 0;
                }
                .u-news-text {
                    width: 190px;
                    margin-left: 15px;
                    font-size: 17px;
                }
            }
        }
        .g-slogan {
            margin: 10px;
            background-color: aqua;
            height: 40px;
            .g-slogan-text {
                font-size: 20px;
                line-height: 40px;
            }
        }
        .g-middle {
            display: flex;
            margin: 10px;
            width: auto;
            background-color: pink;
            .g-hot {
                width: 340px;
                height: 370px;
                /*line-height: 370px;*/
                margin-left: 10px;
                margin-right: 10px;
                z-index: 1;
                .bg {
                    z-index: 1;
                    height: 100%;
                    background-color: rgba(96, 96, 96, 0.3);
                    filter: alpha(opacity=60);
                    /*opacity: 0.6;*/
                    .notice {
                        display: inline-flex;
                        width: 340px;
                        height: 32px;
                        overflow: hidden;
                        margin-top: 40px;
                        background-color: rgba(96, 96, 96, 0.3);
                        .anim {
                            transition: all 0.5s;
                            margin-top: -30px;
                        }
                        #con1 li {
                            list-style: none;
                            line-height: 30px;
                            height: 30px;
                            width: 280px;
                        }
                    }
                    .g-hot-title {
                        font-size: 28px;
                        width: 100%;
                        line-height: 60px;
                        text-align: center;
                        color: white;
                        z-index: 2;

                    }
                    .g-hot-histroy {

                        font-size: 32px;
                        width: 100%;
                        line-height: 80px;
                        text-align: center;
                        color: white;
                        z-index: 2;

                    }
                }
                .line_buttom {
                    height: 14px;
                    border-bottom: 1px dotted black;
                }
                .line_middle {
                    height: 7px;
                    border-top: 1px dotted black;
                }
            }
            .g-carousel {
                width: 100%;
                .el-carousel__item p {
                    color: #475669;
                    font-size: 18px;
                    opacity: 0.75;
                    line-height: 300px;
                    text-align: center;
                }
                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }
                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }
            }
        }
        .g-loan {
            margin: 10px;
            display: flex;
            .g-sell {
                width: 50%;
                margin-right: 5px;
            }
            .g-buy {
                width: 50%;
                margin-left: 5px;
            }
        }

    }


</style>
