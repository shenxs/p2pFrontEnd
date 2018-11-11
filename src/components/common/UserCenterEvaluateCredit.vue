<template>
    <div class="user-center-evaluate-credit">
        <div class="g-title">
            <h1>用户信用评估</h1>
        </div>

        <el-form label-width="100px" style="margin: 20px 50px">

            <el-row style="margin-bottom: 10px" :gutter="12">
                <el-col :span="8">
                    <el-card shadow="hover">
                        交易数目:{{userCreditInfo.transationNum}}
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        逾期交易:{{userCreditInfo.delayTransation}}
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover">
                        信用等级：{{userCreditInfo.credit}}
                    </el-card>
                </el-col>
            </el-row>

            <el-form-item label="创建时间">
                <el-date-picker disabled="" v-model="userCreditInfo.createTime" type="date"/>
            </el-form-item>

            <el-form-item label="职业">
                <el-input disabled v-model="userCreditInfo.job"/>
            </el-form-item>

            <el-form-item label="年收入">
                <el-input disabled v-model="userCreditInfo.annualIncome"/>
            </el-form-item>


            <el-form-item label="存款">
                <el-input disabled v-model="userCreditInfo.deposit"/>
            </el-form-item>

            <el-form-item v-for="(card,index) in userCreditInfo.cards"
                          :label="'卡号'+(index+1)"
                          :key="index"
                          prop="card">

                <el-input disabled v-model="card.cardNum" type="text" placeholder="请输入卡号"/>

            </el-form-item>


            <el-form-item
                    v-for="(asset,index) in userCreditInfo.assets"
                    :label="'资产'+ (index+1)"
                    :key="asset.key"
                    prop="assets">
                <el-row>
                    <el-col>
                        <el-select disabled v-model="asset.assetType" style="width: 30%" placeholder="请选择资产类型">
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
                        <el-input-number disabled v-model="asset.assessmenValue" :min="0" style="width: 40%"/>
                        <p style="display: inline ;margin-left: 10px;font-size: 17px">万</p>
                        <el-input disabled
                                  v-model="asset.assessCertification"
                                  type="textarea"
                                  style="margin-top:5px;"
                                  placeholder="资产估值证明"
                                  autosize/>
                    </el-col>

                </el-row>
            </el-form-item>
            <el-form-item label="期望信用">
                <el-select v-model="creditValues" placeholder="期望信用">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="信用等级介绍" >
                <div class="collaspe-wapper">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="贷款额度:" name="1">
                        <div class="introduce">
                        <div>A: 总资产的150%</div>
                        <div>B: 总资产的100%</div>
                        <div>C: 总资产的50%</div>
                        <div>D: 10000</div>
                        <div>E: 1000</div>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="分数评级：" name="2">
                        <div class="introduce">
                        <div>A: >799</div>
                        <div>B: 740-799</div>
                        <div>C: 670-739</div>
                        <div>D: 580-669</div>
                        <div>E: &lt;579</div>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="分数计算占比：" name="3">
                        <div class="introduce">
                        <div>付款记录：35%</div>
                        <div>债务金额：30%</div>
                        <div>信用记录的长度：15%</div>
                        <div>新信贷额度：10%</div>
                        <div>信贷总额度：10%</div>
                        </div>
                    </el-collapse-item>

                </el-collapse>
                </div>
            </el-form-item>

            <el-form-item>
                <el-button type="success"
                           style="margin-left: 40%"
                           @click="applyCreditUpdate">
                    申请信用评级更新
                </el-button>
            </el-form-item>

        </el-form>
        <el-dialog :title="'已提交申请'" :visible.sync="dialogVisibility">

        </el-dialog>

    </div>
</template>

<script>
  import api from '../../api/api';

  export default {
    name: 'UserCenterEvaluateCredit',
    data () {

      return {
        activeName: '1',
        userCreditInfo: {},
        options: [{
          value: 1,
          label: 'A'
        }, {
          value: 2,
          label: 'B'
        }, {
          value: 3,
          label: 'C'
        }],
        creditValues:'',
        dialogVisibility: false,
        userId: 0
      };
    },
    methods: {
      applyCreditUpdate () {
        api.expectedCredit({userId:this.userId,expectedCredit:this.creditValues})
        this.dialogVisibility = true;
      }
    },
    beforeMount () {
      let user = JSON.parse(localStorage.getItem('user'));
      this.userId = user.userId;
      api.getPersonCredit({userId: this.userId}).then(re => {
        if (re.data.code == 0) {
          this.userCreditInfo = re.data.data;
        }
      }).catch(e => {
        this.$alert(e);
      });
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
        .collaspe-wapper{
            padding: 10px;
            background-color: white;
            .introduce{
                margin-left: 20px;
                /*background-color: #efefef;*/
            }
        }

        .el-card {
            text-align: center;
        }

    }
</style>
