<template>
    <div class="g-profile">
        <div class="g-left">
            <h1>个人信息</h1>
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
                <el-form-item label="用户名" prop="username">
                    <p style="display: inline ;font-size: 24px">{{ ruleForm.username }}</p>
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email" type="email"/>
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号码" type="text"/>
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio v-model="ruleForm.gender" :label="1">男</el-radio>
                    <el-radio v-model="ruleForm.gender" :label="0">女</el-radio>
                </el-form-item>
                <el-form-item label="出生日期" prop="birthday">
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker
                                    v-model="ruleForm.birthDate"
                                    type="date"
                                    placeholder="选择日期"
                                    style="width: 100%;"/>
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item label="职业" prop="job">
                    <el-input v-model="ruleForm.job" placeholder="请填写您的职业"/>
                </el-form-item>

                <el-form-item label="年收入" prop="annualIncome">
                    <el-input-number v-model="ruleForm.annualIncome" :min="0" type="number"/>
                    <p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>
                </el-form-item>

                <el-form-item label="证件类型" prop="id_type">
                    <el-select v-model="ruleForm.idType" placeholder="请选择证件类型">
                        <el-option label="身份证" value="IDCARD"/>
                        <el-option label="军人证" value="ARMYMANCARD"/>
                        <el-option label="护照" value="PASSPORT"/>
                        <el-option label="户口本" value="PERMANENTRESIDENT"/>
                        <el-option label="外国人永久居留证" value="FOREIGN"/>
                        <el-option label="武警证" value="POLICECARD"/>
                        <el-option label="港澳居民来往内地通行证" value="GAJMLW"/>
                        <el-option label="台湾居民来往大陆通行证 " value="TWJMLW"/>
                        <el-option label="其他证件类型" value="QTZJLX"/>
                    </el-select>
                </el-form-item>

                <el-form-item label="证件号" prop="id_num">
                    <el-input v-model="ruleForm.idNum" type="text" placeholder="请输入证件号"/>
                </el-form-item>

                <el-form-item label="卡号" prop="card">
                    <el-input v-model="ruleForm.card" type="text" placeholder="请输入卡号"/>
                </el-form-item>

                <el-form-item label="存款" prop="deposit">
                    <el-input-number v-model="ruleForm.deposit" :min="0" type="number"/>
                    <p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>
                </el-form-item>

                <el-form-item
                        v-for="(asset,index) in assets"
                        :label="'资产'+ (index+1)"
                        :key="asset.key"
                        prop="assets">
                    <el-row>
                        <el-col>
                            <el-select v-model="asset.type" style="width: 30%" placeholder="请选择资产类型">
                                <el-option label="房产" value="house"/>
                                <el-option label="车" value="car"/>
                                <el-option label="公司估值" value="company"/>
                                <el-option label="股票" value="stock"/>
                                <el-option label="期货" value="futures"/>
                                <el-option label="基金" value="funds"/>
                                <el-option label="证券" value="bond"/>
                                <el-option label="古玩字画" value="antique"/>
                                <el-option label="其他" value="other"/>
                            </el-select>
                            <p style="display: inline;margin:0 20px">估值 :</p>
                            <el-input-number v-model="asset.value" :min="0" style="width: 40%"/>
                            <p style="display: inline ;margin-left: 10px;font-size: 17px">万</p>
                            <el-input
                                    type="textarea"
                                    style="margin-top:5px;"
                                    placeholder="资产估值证明"
                                    autosize/>
                        </el-col>
                        <el-col>
                            <el-button
                                    class="u-asset-delete-btn"
                                    type="danger"
                                    style="margin-left: 50px"
                                    icon="el-icon-delete"
                                    circle
                                    @click="deleteAsset(index)"/>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="updateProfile">保存</el-button>
                    <el-button type="success" @click="addAsset">新增资产</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="g-right">
            <div class="m-Thumb-card">
                <el-card class="u-card-thumb">
                    <img class="u-thumb-img" height="150" width="150" src="../../assets/default_avatar.png">
                    <div style="padding: 14px;">
                        <span>签名：{{ ruleForm.signature }}</span>
                    </div>
                </el-card>
            </div>
            <div class="g-credit">
                <el-card class="m-credit-card">
                    信用等级:{{ ruleForm.credit }}
                </el-card>
            </div>
            <div class="g-numbers">
                <el-card class="m-card-transition" shadow="hover">
                    交易数目：{{ ruleForm.transationNum }}
                </el-card>

                <el-card class="m-card-delay" shadow="hover">
                    逾期数目：{{ ruleForm.delayTransation }}
                </el-card>
            </div>
            <el-input
                    v-model="ruleForm.description"
                    type="textarea"
                    placeholder="自我描述"
                    autosize
                    maxlength="255"/>

        </div>
    </div>
</template>

<script>
  /* eslint-disable */

  import api from '../../api/api';

  export default {
    name: 'user-center-profile',
    data () {
      return {

        ruleForm: {
          username: null,
          signature: '天之道，损有余而补不足',
          gender: null,
          email: '247820400@qq.com',
          card: '3304383838438',
          phoneNumber: '17816879774',
          birthDate: null,
          job: '厨子',
          annualIncome: 12,
          idType: 'IDCARD',
          idNum: '33042419960101189X',
          deposit: 1234,
          description: '诸葛亮字孔明，琅邪阳都人也。汉司隶校尉诸葛丰后也。',
          transationNum: 123,
          delayTransation: 321,
          credit: 1
        },
        assets: [
          {
            value: '',
            type: '',
            description: ''
          }
        ],

        rules: {
          phoneNumber: [
            {required: true, message: '手机号码错误', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码'}
          ]
        }

      };

    },
    beforeMount () {
      // `this` 指向 vm 实例
      let user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      api.getById({userId: user.userId}).then(re => {
        console.log(re);
        this.ruleForm.username = re.data.data.username;
        this.ruleForm.signature = re.data.data.signature;
        this.ruleForm.gender = re.data.data.gender;
        this.ruleForm.email = re.data.data.email;
        this.ruleForm.card = re.data.data.card;
        this.ruleForm.phoneNumber = re.data.data.phoneNumber;
        this.ruleForm.birthDate = re.data.data.birthDate;
        this.ruleForm.job = re.data.data.job;
        this.ruleForm.annualIncome = re.data.data.annualIncome;
        this.ruleForm.idType = re.data.data.idType;
        this.ruleForm.idNum = re.data.data.idNum;
        this.ruleForm.deposit = re.data.data.deposit;
        this.ruleForm.description = re.data.data.description;
        this.ruleForm.transationNum = re.data.data.transationNum;
        this.ruleForm.delayTransation = re.data.data.delayTransation;
        this.ruleForm.credit = re.data.data.credit;

      }).catch(e => {
        console.log(e);
      });

    },
    methods: {
      togglePassword: function () {
        // eslint-disable-next-line
        console.log(this.passwordtype);
        if (this.passwordtype === 'password') {
          this.passwordtype = 'text';
        } else {
          this.passwordtype = 'password';
        }
      },
      addAsset: function () {
        this.ruleForm.assets.push({value: '', type: '', description: ''});
      },
      deleteAsset: function (index) {
        this.ruleForm.assets.slice(index, 1);
        this.$delete(this.ruleForm.assets, index);
      },
      updateProfile () {
        const user = JSON.parse(localStorage.getItem('user'));
        let data = {
          userId: user.userId,
          ...this.ruleForm
        };
        data.birthDate = (new Date(data.birthDate).getTime());

        api.update(data).then((re) => {
          console.log(re);
          if (re.data.code === 0) {
            const h = this.$createElement;
            this.$notify({
              title: '提示',
              message: h('i', {style: 'color: teal'}, '保存成功')
            });
          }
        }).catch((e) => {
          const h = this.$createElement;
          this.$notify({
            title: '保存失败',
            message: h('i', {style: 'color: teal'}, e)
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
    .g-profile {
        width: 100%;
        margin-left: 10px;
        background: white;
        padding: 30px;
        .g-left {
            width: 50%;
            float: left;
            margin-right: 20px;
            .u-asset-delete-btn {
                position: absolute;
                left: 100%;
                top: 30%;
            }
        }
        .g-right {
            width: 40%;
            float: left;
            height: 100px;

            .u-card-thumb {
                /*width: 200px;*/
                margin: 0 10px;
                /*display: inline-block;*/
                text-align: center;
                .u-thumb-img {
                    /*border: #000 solid 2px;*/
                    border-radius: 50%;
                    transition: all 1.0s;
                    margin: auto;
                    &:hover {
                        transform: rotate(360deg);
                    }

                }
            }
            .credit-card {

            }
            .m-credit-card {
                margin: 10px;
                text-align: center;
                &:hover {
                    margin: 10px 7px 10px 7px;
                }
            }
            .g-numbers {
                text-align: center;
                .m-card-transition {
                    float: left;
                    width: 43%;
                    margin: 10px;
                    &:hover {
                        margin: 7px;
                    }
                }
                .m-card-delay {
                    float: left;
                    width: 43%;
                    margin: 10px;
                    &:hover {
                        margin: 7px;
                    }
                }
            }

        }
    }

</style>
