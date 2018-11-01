<template>
    <div>
        <el-container>
            <el-aside style="width: 200px">
                <el-menu
                        class="m-sidebar"
                        @select="handleSelect">
                    <el-menu-item index="1-1">
                        个人信息
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">个人交易信息</template>
                        <el-menu-item index="2-1">待审核出借</el-menu-item>
                        <el-menu-item index="2-2">待审核购买</el-menu-item>
                        <el-menu-item index="2-3">已完成交易</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3-1">
                        信用评级
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <profile v-if="menuFlag === '1-1'"/>
            <tosell v-if="menuFlag === '2-1'"/>
            <tobuy v-if="menuFlag === '2-2'"/>
            <deals-done v-if="menuFlag === '2-3'"/>
            <evaluate-credit v-if="menuFlag=== '3-1'"/>

        </el-container>
    </div>
</template>

<script>
  import dealsDone from '../common/UserCenterDealsDone';
  import profile from '../common/UserCenterProfile';
  import tobuy from '../common/UserCenterTobuy';
  import tosell from '../common/UserCenterTosell';
  import evaluateCredit from '../common/UserCenterEvaluateCredit';

  export default {
    name: 'MainUser',
    components: {dealsDone, profile, tobuy, tosell, evaluateCredit},
    data () {
      return {
        menuFlag: '1-1'
      };
    },
    beforeMount () {
      if (this.$store.state.islogin) {
        const user = localStorage.getItem('user');
        if (user.role === 'user') {
          return;
        }
      }
      // this.$router.push('/index');
    },
    methods: {

      handleSelect (index) {
        // eslint-disable-next-line
        this.menuFlag = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
    .el-aside {
        min-height: 100vh;
        background-color: white;
        .el-menu {
            position: fixed;
            width: inherit;
            height: auto;
        }
    }
</style>
