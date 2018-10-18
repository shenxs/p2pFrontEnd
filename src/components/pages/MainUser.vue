<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu class="m-sidebar"
                         @open="handleOpen"
                         @close="handleClose">
                    <el-menu-item index="1-1">
                        个人信息
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">个人交易信息</template>
                        <el-menu-item index="2-1">待审核出借</el-menu-item>
                        <el-menu-item index="2-2">待审核购买</el-menu-item>
                        <el-menu-item index="2-3">已完成交易</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">
                        信用评级
                    </el-menu-item>
                </el-menu>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'main-user',
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
        width: 200px;
    }
</style>
