<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu class="m-sidebar"
                         @open="handleOpen"
                         @close="handleClose">
                    <el-menu-item index="1-1">
                        总览
                    </el-menu-item>

                    <el-menu-item index="2">
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
                        <el-menu-item index="4-1">出借记录</el-menu-item>
                        <el-menu-item index="4-2">购买记录</el-menu-item>
                        <el-menu-item index="4-3">用户管理</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>


        </el-container>
    </div>
</template>

<script>
  /* eslint-disable */


  export default {
    name: 'main-admin',
    components:{},
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="scss" scoped>
    .m-sidebar {

    }
</style>
