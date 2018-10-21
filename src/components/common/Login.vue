<template>
    <div class="m-login">
        <h1 class="u-login-title">登录</h1>

        <el-form label-width="100px">
            <el-form-item label="账号">
                <el-input v-model="accountInfo.account" placeholder="请输入账号" type="text" id="account"
                          @blur="inputBlur('account',accountInfo.account)"/>
                <p class="u-login-page">{{accountError}}</p>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="accountInfo.password" placeholder="请输入密码" type="password" id="password"
                          @blur="inputBlur('password',accountInfo.password)"></el-input>
                <p class="u-login-page">{{passwordError}}</p>
            </el-form-item>

            <el-form-item label="验证码">
                <el-row type="flex" :gutter="10">
                    <el-col :span="40">
                        <el-input v-model="accountInfo.sms" placeholder="请输入短信验证码" type="number" id="sms-code"
                                  @blur="inputBlur('sms',accountInfo.sms)"></el-input>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="info" icon="el-icon-message" @click="sendSms">获取验证码</el-button>
                    </el-col>
                </el-row>
                <p class="u-login-page">{{smsError}}</p>
            </el-form-item>
            <div class="u-checkbox">
                <el-checkbox v-model="isadmin">管理员</el-checkbox>
            </div>
            <div class="u-form-btns">
                <el-button class="u-login-btn" type="primary" @click="handleLogin" :disabled="isLoginBtnDisabled">登录</el-button>
            </div>

        </el-form>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        accountInfo: {
          account: '',
          password: '',
          sms: ''
        },
        accountError: '',
        passwordError: '',
        smsError: '',
        isLoginBtnDisabled: true,
        isadmin: false
      };
    },
    methods: {
      sendSms () {
        // eslint-disable-next-line
        console.log('发送短信');
      },

      inputBlur: function (errorItem, inputContent) {
        inputContent = inputContent.trim();
        if (errorItem === 'account') {
          if (inputContent === '') {
            this.accountError = '账号不能为空';
            this.accountInfo.account = '';
          } else {
            this.accountError = '';
          }
        } else if (errorItem === 'password') {
          if (inputContent === '') {
            this.passwordError = '密码不能为空';
            this.accountInfo.password = '';
          } else {
            this.passwordError = '';
          }
        } else if (errorItem === 'sms') {
          if (inputContent === '') {
            this.smsError = '请输入您收到的验证码';
          } else {
            //校验验证码
            this.smsError = '';
            this.isLoginBtnDisabled = false;
          }
        }

      },
      handleLogin () {
        if (this.isadmin) {
          this.$router.push('/admin');
        } else {
          this.$router.push('/user');
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

    .m-login {
        background: white;
        height: auto;
        width: 500px;

        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -300px;
        margin-left: -200px;

        padding: 30px 20px 20px;
        border-radius: 8px;
        box-sizing: border-box;
        padding-right: 60px;

        .u-login-title {
            text-align: center;
            margin-bottom: 20px;
            margin-left: 70px;
        }
        .u-login-page {
            color: red;
        }

        .u-form-btns {
            margin: 0 50%;
            width: 50%;
        }
        .u-checkbox {
            margin: 0 15%;
            width: 50%
        }

        .u-login-btn {
            text-align: center;
            margin: auto;
        }
    }

</style>
