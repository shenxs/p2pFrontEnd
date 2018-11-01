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
                <div class="g-middle">
                    <div class="g-carousel">
                        <el-carousel height="370px">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <p>{{ item }}</p>
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

                                    <el-button type="primary" size="medium"
                                               style="width: 80%; font-size:32px ;height: 60px;"
                                    >注册
                                    </el-button>
                                </div>
                                <div class="login" style="font-size: 16px;line-height: 20px">
                                    已有账号？
                                    <a href="">立即登录</a>
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
                                    <el-col :span="2" style="line-height: 30px;margin-left:10px" >
                                        <a @click="goto('/buy')"> 更多 </a>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>


                    </div>


                </div>
                <div class="g-loan">
                    <div class=" g-inner g-sell ">
                        <el-card class="box-card" shadow="hover">
                            <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0" type="text" @click="goto('/sell')">更多
                                </el-button>
                            </div>
                            <el-table>

                            </el-table>

                        </el-card>
                    </div>
                    <div class="g-inner g-buy">
                        <el-card class="box-card" shadow="always">
                            <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0"
                                           type="text" @click="goto('/buy')">更多
                                </el-button>
                            </div>
                            <el-table>

                            </el-table>

                        </el-card>
                    </div>
                </div>
            </div>
        </el-container>

    </div>
</template>

<script>
  export default {
    name: 'MainIndex',

    data () {
      return {
        animate: false,
        items: [
          {name: " 金额20万， 期限90天， 历史年化12.1%"},
          {name: " 金额40万， 期限30天， 历史年化12.1%"},
          {name: " 金额90万， 期限180天， 历史年化12.1%"}
        ]
      }
    },
    created () {
      setInterval(this.scroll, 1000)
    },
    methods: {
      goto (url) {
        this.$router.push(url)
      },
      scroll () {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 500)
      }
    }
  }
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

    .g-middle {
        display: flex;
        width: 100%;
        background-color: pink;
        .g-hot {

            width: 340px;
            height: 370px;
            /*line-height: 370px;*/

            margin: 10px;

            z-index: 1;

            .bg {

                z-index: 1;
                height: 100%;
                background-color: rgba(96, 96, 96, 0.3);
                filter: alpha(opacity=60);
                opacity: 0.6;
                .notice {
                    display: inline-flex;
                    width: 340px;
                    height: 32px;
                    overflow: hidden;
                    margin-top: 40px;
                    background-color: rgba(96, 96, 96, 0.8);
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
            margin: 10px;
            width: 670px;
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
    }

    .g-loan {
        margin: 10px;
        height: 360px;
        display: flex;
        .g-inner {
            width: 100%;
            .box-card {
                width: 100%;
                height: 100%;

            }
        }
        .g-sell {
            margin-right: 5px;
        }
        .g-buy {
            margin-left: 5px;
        }

    }


</style>
