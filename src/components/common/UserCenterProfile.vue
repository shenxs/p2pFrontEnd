<template>
    <div class="profile">
        <h1>个人信息</h1>

        <!--添加个人资产TODO-->
        <!--<el-form-item v-for="(asset,index) in ruleForm.assets"-->
                      <!--:label="'资产'+ (index+1)"-->
                      <!--:key="asset.key"-->
                      <!--prop="assets">-->
            <!--<el-col>-->
                <!--<el-select v-model="asset.type" placeholder="请选择资产类型">-->
                    <!--<el-option label="房产" value="house"></el-option>-->
                    <!--<el-option label="车" value="car"></el-option>-->
                    <!--<el-option label="公司估值" value="company"></el-option>-->
                    <!--<el-option label="股票" value="stock"></el-option>-->
                    <!--<el-option label="期货" value="futures"></el-option>-->
                    <!--<el-option label="基金" value="funds"></el-option>-->
                    <!--<el-option label="证券" value="bond"></el-option>-->
                    <!--<el-option label="古玩字画" value="antique"></el-option>-->
                    <!--<el-option label="其他" value="other"></el-option>-->
                <!--</el-select>-->
                <!--<p style="display: inline;margin:0 20px">估值 :</p>-->
                <!--<el-input-number  v-model="asset.value" :min="0"></el-input-number>-->
                <!--<p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>-->
                <!--<el-button type="danger" style="margin-left: 50px" icon="el-icon-delete" circle></el-button>-->
                <!--<el-input style="margin-top:5px " placeholder="资产估值证明"></el-input>-->
            <!--</el-col>-->
        <!--</el-form-item>-->

    </div>
</template>

<script>
  export default {
    name: 'user-center-profile'
  };
</script>

<style lang="scss" scoped>
    .profile{
        width: 100%;
    }

</style>
