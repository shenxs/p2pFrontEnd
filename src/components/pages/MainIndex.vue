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
                    <div class=" g-inner g-sell ">
                        <el-card class="box-card"  shadow="hover">
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
                        <el-card class="box-card"  shadow="always">
                            <div slot="header" class="clearfix">
                                <span>卡片名称</span>
                                <el-button style="float: right; padding: 3px 0"
                                           type="text" @click="goto('/buy')">更多</el-button>
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
    methods:{
      goto(url){
        this.$router.push(url)
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
        height: 360px;
        display: flex;
        .g-inner{
            width: 100%;
            .box-card{
                width: 100%;
                height: 100%;

            }
        }
        .g-sell{
            margin-right: 5px;
        }
        .g-buy{
            margin-left: 5px;
        }

    }



</style>
