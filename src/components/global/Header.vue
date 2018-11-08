<template>
    <div class="g-header">
        <div class="g-logo" @click="changeRoute('/index')">
            <img :src="require('@/assets/logo.png')" width="80px" style="text-align: center;
            margin-left: 30px;margin-top: 10px"/>
            <!--<p style="line-height: 60px; text-align: center;">LOGO</p>-->
        </div>
        <div class="g-nav">
            <el-menu
                    :default-active="activeIndex"
                    class="m-nav"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    @select="handleSelect">
                <el-menu-item index="1"><a href="#/index">首 页</a></el-menu-item>
                <el-menu-item index="2"><a href="#/buy">出借贷款</a></el-menu-item>
                <el-menu-item index="3"><a href="#/sell">申请贷款</a></el-menu-item>

                <el-menu-item v-if="isloginCom" index="4" @click="logout">登出</el-menu-item>
                <el-submenu v-else index="4">
                    <template slot="title">用 户</template>
                    <el-menu-item index="4-1" @click="changeRoute('/login')">登录</el-menu-item>
                    <el-menu-item index="4-2" @click="changeRoute('/register')">注册</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
  import api from '../../api/api';

  export default {
    /* eslint-disable */
    name: 'global-header',
    components: {},
    data () {
      return {
        activeIndex: '1'
      };
    },
    computed: {
      isloginCom () {
        return this.$store.state.islogin;
      }
    },
    beforeMount () {
      let user = localStorage.getItem('user');
    },
    methods: {
      changeRoute (path) {
        this.$router.push(path);
      },
      handleSelect (key, keyPath) {
        // console.log(key, keyPath);
      },
      isLogedin () {
        const user = localStorage.getItem('user');
        console.log(user !== null);
        return user !== null;
      },
      logout () {
        const user = localStorage.getItem('user');
        console.log(user);
        localStorage.removeItem('user');

        this.islogin = false;
        api.logout().then((re) => {
          let msg = '';
          if (re.data.code === 0) {
            this.$store.commit('logout');
            localStorage.removeItem('user');
            msg = '已退出';
            this.$router.push('/index');
          } else {
            msg = re.data.message;
          }
          this.$notify({
            title: '提示',
            message: msg
          });
        }).catch((e) => {
          this.$notify({
            title: 'error',
            message: e
          });
        });
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
