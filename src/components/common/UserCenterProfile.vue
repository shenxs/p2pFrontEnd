<template>
    <div class="profile">
        <h1>个人信息</h1>

        <!--添加个人资产TODO-->
        <!--<el-form-item v-for="(asset,index) in ruleForm.assets"-->
                      <!--:label="'资产'+ (index+1)"-->
                      <!--:key="asset.key"-->
                      <!--prop="assets">-->
            <!--<el-form-item label="签名" prop="signature">-->
                <!--<el-input v-model="ruleForm.signature" placeholder="设定个性签名"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="描述" prop="description">-->
                <!--<el-input v-model="ruleForm.description" placeholder="自我描述"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="性别" prop="sex">-->
                <!--<el-radio v-model="ruleForm.sex" label="male">男</el-radio>-->
                <!--<el-radio v-model="ruleForm.sex" label="female">女</el-radio>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="出生日期" prop="birthday">-->
                <!--<el-col :span="11">-->
                    <!--<el-form-item prop="date1">-->
                        <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"-->
                                        <!--style="width: 100%;"></el-date-picker>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="职业" prop="job">-->
                <!--<el-input v-model="ruleForm.job" placeholder="请填写您的职业"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="年收入" prop="annual_income">-->
                <!--<el-input-number v-model="ruleForm.annual_income" :min="0" type="number"></el-input-number>-->
                <!--<p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="证件类型" prop="id_type">-->
                <!--<el-select v-model="ruleForm.id_type" placeholder="请选择证件类型">-->
                    <!--<el-option label="身份证" value="IDCARD"></el-option>-->
                    <!--<el-option label="军人证" value="ARMYMANCARD"></el-option>-->
                    <!--<el-option label="护照" value="PASSPORT"></el-option>-->
                    <!--<el-option label="户口本" value="PERMANENTRESIDENT"></el-option>-->
                    <!--<el-option label="外国人永久居留证" value="FOREIGN"></el-option>-->
                    <!--<el-option label="武警证" value="POLICECARD"></el-option>-->
                    <!--<el-option label="港澳居民来往内地通行证" value="GAJMLW"></el-option>-->
                    <!--<el-option label="台湾居民来往大陆通行证 " value="TWJMLW"></el-option>-->
                    <!--<el-option label="其他证件类型" value="QTZJLX"></el-option>-->
                <!--</el-select>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="证件号" prop="id_num">-->
                <!--<el-input v-model="ruleForm.id_num" type="text" placeholder="请输入证件号"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="邮箱" prop="e-mail">-->
                <!--<el-input v-model="ruleForm.email" type="e-mail" placeholder="请填写您的邮箱"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="存款" prop="deposit">-->
                <!--<el-input-number v-model="ruleForm.deposit" :min="0" type="number"></el-input-number>-->
                <!--<p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>-->
            <!--</el-form-item>-->


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
                <!--<el-input-number v-model="asset.value" :min="0"></el-input-number>-->
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
    .profile {
        width: 100%;
    }

</style>
