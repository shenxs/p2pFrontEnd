<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']"
                 @open="handleClick"
                 @close="handleClick">
            <el-menu-item index="1" @click="changePage('1')">
                <template slot="title"><i class="el-icon-message"></i>首页</template>
            </el-menu-item>

            <el-menu-item index="2" @click="changePage('2')">
                <template slot="title"><i class="el-icon-menu"></i>个人中心</template>
            </el-menu-item>

            <el-menu-item index="3">
                <template slot="title"><i class="el-icon-menu"></i>信用评级</template>
            </el-menu-item>

            <el-menu-item index="4">
                <template slot="title"><i class="el-icon-menu"></i>借贷信息</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "side"
    }
</script>

<style scoped>

</style>
