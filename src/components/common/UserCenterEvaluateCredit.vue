<template>
    <div class="user-center-evaluate-credit">
        <div class="g-title">
            <h1>用户信用评估</h1>
        </div>
        <div class="g-content">
            <el-button type="success"
                       style="margin:20% 50%"
                       @click="applyCreditUpdate">
                申请信用评级更新
            </el-button>
        </div>
        <el-dialog :title="'已提交申请'" :visible.sync="dialogVisibility">

        </el-dialog>

    </div>
</template>

<script>
  export default {
    name: 'UserCenterEvaluateCredit',
    data () {

      return {
        dialogVisibility: false
      };
    },
    methods: {
      applyCreditUpdate () {
        this.dialogVisibility = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-evaluate-credit {
        width: 100%;
        .g-title {
            text-align: center;
            margin-top: 30px;
        }
        .g-content {
        }

    }
</style>
