<template>
    <div class="m-login">
        <h1 class="u-login-title">登录</h1>

        <el-form label-width="100px">
            <el-form-item label="账号">
                <el-input
                        id="account"
                        v-model="accountInfo.username"
                        placeholder="请输入账号"
                        type="text"
                        @blur="inputBlur('username',accountInfo.username)"/>
                <p class="u-login-page">{{ accountError }}</p>
            </el-form-item>
            <el-form-item label="密码">
                <el-input
                        id="password"
                        v-model="accountInfo.password"
                        :type="passwordType"
                        placeholder="请输入密码"
                        @blur="inputBlur('password',accountInfo.password)">
                    <i
                            slot="suffix"
                            title="显示密码"
                            class="el-icon-view"
                            style="cursor:pointer;"
                            @click="togglePassword"/>
                </el-input>
                <p class="u-login-page">{{ passwordError }}</p>
            </el-form-item>

            <el-form-item label="验证码">
                <el-row :gutter="10" type="flex">
                    <el-col :span="40">
                        <el-input
                                id="sms-code"
                                v-model="accountInfo.verificationCode"
                                placeholder="请输入短信验证码"
                                type="number"
                                @blur="inputBlur('verificationCode',accountInfo.verificationCode)"/>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="info" icon="el-icon-message" @click="getLoginMessage">获取验证码</el-button>
                    </el-col>
                </el-row>
                <p class="u-login-page">{{ smsError }}</p>
            </el-form-item>
            <div class="u-checkbox">
                <el-checkbox v-model="isadmin">管理员</el-checkbox>
            </div>
            <div class="u-form-btns">
                <el-button :disabled="isLoginBtnDisabled" class="u-login-btn" type="primary" @click="handleLogin">登录
                </el-button>
            </div>

        </el-form>
    </div>
</template>

<script>
  /* eslint-disable */
  import api from '../../api/api';
  import login from '../../api/login';

  export default {
    name: 'login',
    data () {
      return {
        passwordType: 'password',
        accountInfo: {
          username: '',
          password: '',
          verificationCode: ''
        },
        accountError: '',
        passwordError: '',
        smsError: '',
        isLoginBtnDisabled: true,
        isadmin: false
      };
    },
    methods: {
      togglePassword () {
        if (this.passwordType === 'password') {
          this.passwordType = 'text';
        } else {
          this.passwordType = 'password';
        }
      },
      inputBlur: function (errorItem, inputContent) {
        inputContent = inputContent.trim();
        if (errorItem === 'username') {
          if (inputContent === '') {
            this.accountError = '账号不能为空';
            this.accountInfo.username = '';
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
        } else if (errorItem === 'verificationCode') {
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
        let data = this.accountInfo;
        if (this.isadmin) {
          data['role'] = 'admin';
        } else {
          data['role'] = 'user';
        }
        login(data).then((re) => {
          //eslint-disable-next-line
          console.log(re);
          if (re.data.code === 0) {
            this.$store.commit('login');

            localStorage.setItem('user', JSON.stringify(re.data.data));
            if (re.data.data.role === 'admin') {
              this.$router.push('/admin');
            } else {
              this.$router.push('/user');
            }
          } else {
            alert(re.data.message);
          }
        }).catch((e) => {
          alert(e);
        });

      },
      getLoginMessage () {
        api.getLoginMessage({username: this.accountInfo.username}).then((re => {
          alert(re.message);
        })).catch((e) => {
          alert(e);
        });
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
