<template>

    <div class="creditRating">
        <h1>信用评级</h1>
        <hr/>

        <el-form>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="onCancle">取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>

    export default {
        name: "CreditRating",
        data(){
            return {

            }
        },
        methods:{
            onSubmit(){
                console.log("Submit!");
            },
            onCancle(){
                this.$router.push({name:"index"})
            }
        }
    }
</script>

<style scoped>

</style>
