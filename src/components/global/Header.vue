<template>
    <div class="g-header">
        <div class="g-logo" @click="changeRoute('/index')">
            <p style="line-height: 60px; text-align: center;">LOGO</p>
        </div>
        <div class="g-nav">
            <el-menu
                    :default-active="activeIndex"
                    class="m-nav"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1"><a href="javascript:;">信 息</a></el-menu-item>
                <el-menu-item index="2"><a href="javascript:;">出借贷款</a></el-menu-item>
                <el-menu-item index="3"><a href="javascript:;">申请贷款</a></el-menu-item>
                <el-submenu index="4">
                    <template slot="title">用 户</template>
                    <el-menu-item index="4-1" @click="openUserLogin">登录</el-menu-item>
                    <el-menu-item index="4-2" >注册</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
  export default {
    /* eslint-disable */
    name: 'global-header',
    components: {},
    data () {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      changeRoute (path) {
        this.$router.push(path);
      },
      handleSelect (key, keyPath) {
        // console.log(key, keyPath);
      },
      openUserLogin(){
        this.$router.push('/login')
      }
    }
  };
</script>

<style lang="scss" scoped>
    .g-header {
        z-index: 5;
        position: fixed;
        min-width: 1090px;
        top: 0;
        left: 0;
        background: #555c63;
        width: 100%;
        height: 60px;
        box-shadow: 0 1px 5px #999999;

        .g-logo {
            background: #999999;
            width: 150px;
            height: 100%;
            display: inline-block;
        }

        .g-nav {
            display: inline-block;
            position: absolute;
            right: 0;

            .el-menu--horizontal {
                border-bottom: none;
            }
        }

    }
</style>
