<template>
    <div class="g-main">
        <div class="g-carousel">
            <el-carousel height="410px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <p>{{ item }}</p>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="g-inner g-news">news</div>
        <div class="g-inner g-loan g-loan-sell">loan-sell</div>
        <div class="g-inner g-loan g-loan-buy">loan-buy</div>
    </div>
</template>

<script>
  export default {
    name: 'main-index'
  };
</script>

<style lang="scss" scoped>
    .g-main {
        width: 100%;
        min-height: 500px;
    }

    .g-inner {
        min-height: 100px;
        padding: 20px 50px;
    }

    .g-carousel {
        width: 100%;

        .el-carousel__item p {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 410px;
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

    .g-news {

    }

    .g-loan {

    }

</style>
