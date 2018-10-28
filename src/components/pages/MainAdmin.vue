<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu class="m-sidebar"
                         @open="handleOpen"
                         @close="handleClose"
                         @select="handleSelect">
                    <el-menu-item index="1-1">
                        总览
                    </el-menu-item>

                    <el-menu-item index="2-1">
                        个人信息
                    </el-menu-item>

                    <el-submenu index="3">
                        <template slot="title">待审核</template>
                        <el-menu-item index="3-1">审核出借</el-menu-item>
                        <el-menu-item index="3-2">审核购买</el-menu-item>
                        <el-menu-item index="3-3">信用审核</el-menu-item>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">所有记录</template>
                        <el-menu-item index="4-1">交易记录</el-menu-item>
                        <el-menu-item index="4-2">用户管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <overview v-if="menuFlag === '1-1'"></overview>
            <profile v-if="menuFlag === '2-1'"></profile>
            <review-sell v-if="menuFlag === '3-1'"></review-sell>
            <review-buy v-if="menuFlag === '3-2'"></review-buy>
            <review-credit v-if="menuFlag==='3-3'"></review-credit>
            <transition v-if="menuFlag==='4-1'"></transition>
            <user-management v-if="menuFlag==='4-2'"></user-management>


        </el-container>
    </div>
</template>

<script>
  /* eslint-disable */
  import overview from '../common/AdminOverview';
  import profile from '../common/AdminProfile';

  import reviewBuy from '../common/AdminReviewBuy';
  import reviewSell from '../common/AdminReviewSell';
  import reviewCredit from '../common/AdminReviewCredit';

  import transition from '../common/AdminTransition';
  import userManagement from '../common/AdminUserManagement';

  export default {
    name: 'main-admin',
    components: {overview, profile, reviewBuy, reviewSell, reviewCredit, transition, userManagement},
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect (index) {
        this.menuFlag = index;
      }
    },
    beforeMount: function () {
      // `this` 指向 vm 实例
      // let user = localStorage.getItem('user');
      // if (typeof(user) === undefined ) {
      //   this.$router.push('/login');
      // }
      // console.log(JSON.parse(user));
      // if (user==null|| user.role !== 'admin') {
      //   console.log('goback');
      //   this.$router.push('/index');
      // }
    },
    data () {
      return {
        menuFlag: '1-1'
      };
    }
  };
</script>

<style lang="scss" scoped>
    .m-sidebar {

    }
</style>
