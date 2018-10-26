<template>
    <div class="g-register">

        <h1 class="u-register-title">注册</h1>
        <el-form :labelPosition="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                 class="ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input v-model="ruleForm.username" placeholder="请设定您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请设定您的密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="password2">
                <el-input v-model="ruleForm.password2" placeholder="请再次输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号码" type="text"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificationCode">
                <el-row type="flex" :gutter="10">
                    <el-col :span="40">
                        <el-input v-model="ruleForm.verificationCode" placeholder="请输入短信验证码" type="number" id="sms-code"
                                  @blur="inputBlur('verificationCode',ruleForm.verificationCode)"></el-input>
                    </el-col>
                    <el-col :span="1">
                        <el-button :type="smsBtnType" icon="el-icon-message" @click="sendSms">{{smsBTn}}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-checkbox v-model="ruleForm.isadmin">管理员</el-checkbox>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>


        </el-form>
    </div>
</template>

<script>
  import api from '../../api/api';

  export default {
    name: 'Register',
    data () {
      let passwordEqual = (rule, val, callback) => {
        if (val === '') {
          callback(['请输入密码']);
        } else if (this.ruleForm.password2 !== this.ruleForm.password) {
          callback(['两次密码不一致']);
        }
        callback();
      };
      return {
        labelPosition: 'left',
        smsBTn: '发送验证码',
        smsBtnType: 'info',
        ruleForm: {
          username: '',
          password: '',
          password2: '',
          phoneNumber: '',
          verificationCode: '',
          isadmin: false
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 255, message: '长度在 3 到 255 个字符', trigger: 'blur'}
          ],
          password2: [
            {required: true, message: '请再次输入您的密码', trigger: 'blur'},
            // eslint-disable-next-line
            {validator: passwordEqual, trigger: 'blur'}
          ],
          phoneNumber: [
            {required: true, message: '手机号码错误', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码'}
          ],
          verificationCode: [
            {required: true, message: '请输入验证码', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm (formName) {
        let _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.ruleForm.password !== this.ruleForm.password2) {
              alert('密码不一致');
            } else {
              let role = ((is) => {if (is === true) return 'admin'; else return 'user';})(this.ruleForm.isadmin);
              let data = this.ruleForm;
              data.role = role;
              api.register(data).then((re) => {
                // eslint-disable-next-line
                console.log(re);
                if (re.data.code === 0) {
                  alert("注册成功");
                  _this.$router.push('/login');
                }else{
                  alert(re.data.message);
                }
                // eslint-disable-next-line
              }).catch(reason => {
                alert(reason);
              });
            }
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
      sendSms () {
        /* eslint-disable */
        if (this.ruleForm.phoneNumber === '') {
          alert('手机号码不能为空');
        } else {
          let result1 = api.sendsms({phoneNumber: this.ruleForm.phoneNumber});
          console.log(this.ruleForm.phoneNumber);
          result1.then((re) => {
            console.log(re);
            if (re.data.message === '验证短信发送成功') {
              this.smsBTn = '发送成功';
              this.smsBtnType = 'success';
            } else {
              this.smsBTn = '发送失败';
              this.smsBtnType = 'warning';
            }
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    .g-register {
        background: white;
        position: absolute;
        width: 500px;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -200px;

        padding: 30px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
        padding-right: 60px;

        .u-register-title {
            text-align: center;
            margin-left: 70px;
            margin-bottom: 20px;
        }

        .el-checkbox {
            margin-inline-start: 0px;
        }
    }
</style>
