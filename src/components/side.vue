<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
            <el-menu-item index="1">

                <template slot="title">
                    <router-link to="/" replace>
                        <i class="el-icon-message"></i> 首页
                    </router-link>
                </template>

            </el-menu-item>

            <el-menu-item index="2">
                <template slot="title">
                    <router-link to="usercenter" replace><i class="icon-yonghu"></i>个人中心</router-link>
                </template>
            </el-menu-item>

            <el-menu-item index="3">
                <template slot="title">
                    <router-link to="creditRating" replace><i class="el-icon-menu"></i>信用评级</router-link>
                </template>
            </el-menu-item>

            <el-menu-item index="4">
                <template slot="title">

                    <router-link to="borrowLoanInfo" replace><i class="icon-gaoxiaofei"></i>借贷信息</router-link>
                </template>
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
    .el-aside {
        color: #333;
    }

    li a {
        text-decoration: none;
        color: grey;
        margin: 0 6px;
    }
</style>
