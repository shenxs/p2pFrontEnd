<template>
    <div id="app">


        <!--<el-container style="height:650px; border: 1px solid #eee">-->
        <!--<side></side>-->

        <!--<el-container >-->
        <!--<my-header></my-header>-->
        <!--<el-main>-->
        <!--<router-view> </router-view>-->
        <!--<my-footer></my-footer>-->
        <!--</el-main>-->

        <!--</el-container>-->
        <!--</el-container>-->


        <el-container style="height: 500px; border: 1px solid #eee">
            <side></side>
            <el-container>
                <my-header></my-header>

                <el-header style="height: 0%;"/>

                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>

    </div>

</template>

<script>

    import myHeader from './components/myHeader'
    import side from './components/side'
    import myFooter from './components/myFooter'

    export default {
        name: 'app',
        components: {myHeader, side, myFooter},

        props: {
            msg: 123
        },
        methods: {
            changeRoute(path) {
                this.$router.push(path);
            }
        },
        data() {
            return {
                theMsg: "Hello"
            }

        }
    }


</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-bottom: auto;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;

    }
    .a{
        text-decoration-line: none;
    }



</style>
