<template>
    <div class="user-center">
        <h2 class="page-title">个人中心</h2>
        <hr/>

        <el-row class="setting-line" :gutter="0">
            <el-col span="8" class="shuxing">
                <label >用户名</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="username"> </el-input>
            </el-col>
        </el-row>

        <el-row class="setting-line"  :gutter="0">
            <el-col span="8" class="shuxing">
                <label>邮箱</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="email"> </el-input>
            </el-col>
        </el-row>

        <el-row class="setting-line"  :gutter="0">
            <el-col span="8" class="shuxing">
                <label>密码</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="password"> </el-input>
            </el-col>
        </el-row>

        <el-row  class="setting-line" :gutter="0">
            <el-col span="8" class="shuxing">
                <label>签名</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="signature"> </el-input>
            </el-col>
        </el-row>

        <el-row class="setting-line" :gutter="0">
            <el-col span="8" class="shuxing">
                <label>创建时间</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="creatTime"> </el-input>
            </el-col>
        </el-row>

        <hr/>

        <el-row class="setting-line" :gutter="0">
            <el-col span="8" class="shuxing">
                <label>卡号</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="card"> </el-input>
            </el-col>
        </el-row>

        <el-row class="setting-line" :gutter="0">
            <el-col span="8" class="shuxing">
                <label>存款</label>
            </el-col>

            <el-col span="8">
                <el-input v-model="desposit"> </el-input>
            </el-col>
        </el-row>


        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="hover">
                    <label>交易数目 {{transation_num}}</label>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    <label>逾期数目 {{delay_transation}}</label>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    <label>征信级别 {{credit}}</label>
                </el-card>
            </el-col>
        </el-row>


    </div>


</template>

<script>
    export default {
        name: "UserCenter",
        data(){
            return{
                username:"起个响亮的名字",
                email:"abc@dec.com",
                password:"123456password",
                signature:"存在即合理",
                type:"SVIP",
                creatTime:"2018-12-25",

                card:"67798991872091083883",
                desposit:"32100",
                transation_num:1,
                delay_transation:2,
                credit:3
            }
        }
    }
</script>

<style scoped>
    .page-title {
        font-size: 24px;
        margin-bottom: 0;
        margin-top: 0;
    }
    el-row{
        margin-bottom: 20px;
    }
    .setting-line{
        margin-bottom: 10px;
    }
    .form-group {
        display: inline;
    }
    el-inpt{
        width: 45px;
    }

    .shuxing{
        width: 200px;
    }

</style>
