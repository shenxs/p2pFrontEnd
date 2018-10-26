<template>
<div class="g-profile" >
    <div class="g-left">
    	<h1>管理员信息</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="姓名" prop="adminname">
                    <p style="display: inline ;font-size: 24px">{{ruleForm.adminname}}</p>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input :type="passwordtype" v-model="ruleForm.password">
                        <i slot="suffix" title="显示密码" class="el-icon-view" style="cursor:pointer;"
                           @click="togglePassword"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="email" v-model="ruleForm.email"></el-input>
                </el-form-item>

                <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input v-model="ruleForm.phoneNumber" placeholder="请输入手机号码" type="text"></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio v-model="ruleForm.gender" label="male">男</el-radio>
                    <el-radio v-model="ruleForm.gender" label="female">女</el-radio>
                </el-form-item>

                <el-form-item label="创建时间" prop="createTime">
                    <el-input type="text" v-model="ruleForm.createTime"></el-input>
                </el-form-item>


<!--                 <el-form-item label="证件号" prop="id_num">
                    <el-input v-model="ruleForm.idNum" type="text" placeholder="请输入证件号"></el-input>
                </el-form-item>

                <el-form-item label="卡号" prop="card">
                    <el-input v-model="ruleForm.card" type="text" placeholder="请输入卡号"></el-input>
                </el-form-item> -->

<!--                 <el-form-item label="存款" prop="deposit">
                    <el-input-number v-model="ruleForm.deposit" :min="0" type="number"></el-input-number>
                    <p style="display: inline ;margin-left: 20px;font-size: 17px">万</p>
                </el-form-item> -->

<!--
                <el-form-item>
                    <el-button type="primary">保存</el-button>
                    <el-button type="success" @click="addAsset">新增资产</el-button>
                </el-form-item> -->


            </el-form>
        </div>
        <div class="g-right">
            <div class="m-Thumb-card">
                <el-card class="u-card-thumb">
                    <img class="u-thumb-img" height="150" width="150" src="../../assets/default_avatar.png"/>
                    <div style="padding: 14px;">
                        <span>{{ruleForm.signature}}</span>
                    </div>
                </el-card>
            </div>
 <!--            <div class="g-credit">
                <el-card class="m-credit-card">
                    {{credit}}
                </el-card>
            </div> -->

            <el-input v-model="ruleForm.description" type="textarea" placeholder="自我描述" :autosize="{ minRows: 2, maxRows: 6}" style="margin:10px"></el-input>

    </div>
</div>
</template>

<script>
  export default {
    name: 'admin-profile',
    data(){
    	return{
    		ruleForm:{
    			adminname: 'xiaying',
    			password: 'this is a secret',
    			signature: '天之道，损有余而补不足',
    			gender: 'female',
    			email: '247844340@qq.com',
    			createTime:'2018-10-25',
    			description: '诸葛亮字孔明，琅邪阳都人也。汉司隶校尉诸葛丰后也。父珪，字君贡，汉末为太山郡丞。亮早孤，从父玄为袁术所署豫章太守，玄将亮及亮弟均之官。会汉朝更选硃皓代玄。玄素与荆州牧刘表有旧，往依之。献帝春秋曰：初，豫章太守周术病卒，刘表上诸葛玄为豫章太守，治南昌。汉朝闻周术死，遣硃皓代玄。皓从扬州太守刘繇求兵击玄，玄退屯西城，皓入南昌。建安二年正月，西城民反，杀玄，送首诣繇。此书所云，与本传不同。玄卒，亮躬耕陇亩，好为梁父吟。汉晋春秋曰：亮家于南阳之邓县，在襄阳城西二十里，号曰隆中。身长八尺，每自比於管仲、乐毅，时人莫之许也'

    		},
    		rules: {
          phoneNumber: [
            {required: true, message: '手机号码错误', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码'}
          ]
        },
        passwordtype:'password'
    	}
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
      addAsset:function ( ) {
        this.ruleForm.assets.push({value:'',type:'',description:''});
      },
      deleteAsset:function (index) {
        this.ruleForm.assets.slice(index,1);
        this.$delete(this.ruleForm.assets,index);
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



        }
    }
</style>
