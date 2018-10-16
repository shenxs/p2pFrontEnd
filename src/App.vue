<template>
    <div id="app">
        <my-header></my-header>
        <side></side>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>

    import myHeader from './components/header'
    import side from './components/side'
    import myFooter from './components/footer'

    export default {
        name: 'app',
        components: {myHeader, side, myFooter},

        props: {
            msg: 123
        },
        methods: {
            changePage(number) {
                this.flag = number;
            },
            changeRoute(path){
                this.$router.push(path);
            }
        },
        data() {
            return {
                flag: '1',
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
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

</style>
