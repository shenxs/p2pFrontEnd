<template>
    <div id="app">

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
        },

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
