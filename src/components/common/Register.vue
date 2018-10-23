<template>
    <div class="g-register">

        <el-form :labelPosition="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input v-model="ruleForm.account" placeholder="请设定您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input v-model="ruleForm.password" placeholder="请设定您的密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="签名" prop="signature">
                <el-input v-model="ruleForm.signature" placeholder="设定个性签名"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="ruleForm.description" placeholder="自我描述"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio v-model="ruleForm.sex" label="male">男</el-radio>
                <el-radio v-model="ruleForm.sex" label="female">女</el-radio>
            </el-form-item>

            <el-form-item label="出生日期" prop="birthday">
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>

            <el-form-item label="职业" prop="job">
                <el-input v-model="ruleForm.job" placeholder="请填写您的职业"></el-input>
            </el-form-item>

            <el-form-item label="年收入" prop="annual_income">
                <el-input-number v-model="ruleForm.annual_income" :min="0" type="number"></el-input-number>
                <p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>
            </el-form-item>

            <el-form-item label="证件类型" prop="id_type">
                <el-select v-model="ruleForm.id_type" placeholder="请选择证件类型" >
                    <el-option label="身份证" value="IDCARD"></el-option>
                    <el-option label="军人证" value="ARMYMANCARD"></el-option>
                    <el-option label="护照" value="PASSPORT"></el-option>
                    <el-option label="户口本" value="PERMANENTRESIDENT"></el-option>
                    <el-option label="外国人永久居留证" value="FOREIGN"></el-option>
                    <el-option label="武警证" value="POLICECARD"></el-option>
                    <el-option label="港澳居民来往内地通行证" value="GAJMLW"></el-option>
                    <el-option label="台湾居民来往大陆通行证 " value="TWJMLW"></el-option>
                    <el-option label="其他证件类型" value="QTZJLX"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="证件号" prop="id_num">
                <el-input v-model="ruleForm.id_num" type="text" placeholder="请输入证件号"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="e-mail">
                <el-input v-model="ruleForm.email" type="e-mail" placeholder="请填写您的邮箱"></el-input>
            </el-form-item>

            <el-form-item label="存款" prop="deposit">
                <el-input-number v-model="ruleForm.deposit" :min="0" type="number"></el-input-number>
                <p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

  export default {
    name: 'Register',
    data () {
      return {
        labelPosition: 'left',
        ruleForm: {
          account: '',
          password: '',
          signature: '',
          description: '',
          sex: 'male',
          birthday:'',
          job: '',
          annual_income: 0,
          id_type: '',
          id_num:'',
          email:'',
          deposit:0,

        },
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 255, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          birthday: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          job:[
            {required: true,message:'请输入您的职业',trigger:'blur'}
          ],
          id_type: [
            {type: 'string', required: true, message: '请选择您的证件类型', trigger: 'change'}
          ],
          id_num :[
            {type:'string',required:true, message:"请输入证件号",trigger:'blur'}
          ]

        }
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            // eslint-disable-next-line
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      },

    }
  };
</script>

<style lang="scss" scoped>
    .g-register {
        width: 600px;
        margin: 30px auto auto;
    }
</style>
