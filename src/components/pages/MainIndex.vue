<template>
    <div class="g-index">
        <el-container style="border: 2px solid #eee">
            <el-aside width="350px">
                ss11
            </el-aside>
            <div class="g-main">
                <div class="g-slogon"><marquee class="g-slogon-text"> 你不贷，我不贷，明天我们就狗带！</marquee> </div>
                <div clas="g-slogan"></div>
                <div class="g-carousel">
                    <el-carousel height="360px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <p>{{ item }}</p>
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="g-inner g-loan g-loan-sell">loan-sell</div>
                <div class="g-inner g-loan g-loan-buy">loan-buy</div>

            </div>
        </el-container>

    </div>
</template>

<script>
  export default {
    name: 'MainIndex'
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
        .g-slogon{
            margin: 10px;
            background-color: aqua;

            height: 40px;


            .g-slogon-text{
                font-size: 20px;
                line-height: 40px;
            }
        }
    }

    .g-inner {
        min-height: 100px;
        padding: 20px 50px;
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
        width: 405px;
        margin: 10px;
        line-height: 360px;
        background-color: aquamarine;
        display: inline-block;
    }
    .g-loan-sell{

    }

</style>
