<!--suppress ALL -->
<template>
    <div class="admin-user-management">
        <basic-table
                :title="'所有用户'"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                @currentChange="handelCurrentChange"
                @reset="handleReset"
                @refresh="loadData"

        />
    </div>
</template>

<script>
  /* eslint-disable */
  import basicTable from './BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'admin-user-management',
    components: {basicTable},
    beforeMount () {
      this.loadData();
    },
    data () {
      return {
        pageNow:1,
        pageSize:10,
        labels:{
          userId:'用户id',
          username:'用户名',
          phoneNumber:'手机号码',
          job:'职业',
          gender:'性别',
          email:'邮箱',
          idNum:'证件号',
          deposit:'存款（万)'

        },
        tabledata:null,
        requestData:null,
        tableData:null,
        totalElements:0,
      };
    },
    methods:{
      parseUser(u){
        if(u.gender===1){
          u.gender='男'
        }else{
          u.gender='女'
        }
        return u;
      },
      loadData(){
        let data={pageNow: this.pageNow, pageSize:this.pageSize}
        api.getAllUser(data).then(re=>{
          console.log(re)
          this.requestData=JSON.parse(JSON.stringify( re.data.data.content));
          this.tableData=re.data.data.content.map(this.parseUser);
          this.totalElements=re.data.data.totalElements;
        }).catch(e=>{
          console.log(e);
        })
      },
      handelCurrentChange(val){
        this.pageNow=val;
        this.loadData();
      },
      handleReset(){
        console.log('reset');
        this.pageNow=1;
        this.loadData();
      }
    }
  };
</script>

<style scoped>
    .admin-user-management {
        width: 100%;
    }

</style>
