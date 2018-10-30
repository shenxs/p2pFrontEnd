<template>

  <div class="admin-review-buy" style="width: 100%">
    <h1>管理员审核购买</h1>
    <basic-table
      :title="title"
      :labels="label"
      :tabledata="tableData"
      :review="true"
      @checked="checked"/>

  </div>
</template>

<script>
/* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  import utils from '../../utils'

  export default {
    name: 'admin-review-buy',
    components: {basicTable},
    beforeMount () {
      //获取数据
      this.loadData();
    },
    data () {
      return {
        label: {
          userName: '用户名',
          credit: '信用等级',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          sellTime: '交易时间',
          status: '状态'
        },
        tableData: null,
        title:'审核购买',
        pageNow: 1,
        pageSize: 10,
        totalElemets: 0
      };
    },
    methods: {
      parseData (aRecord) {
        aRecord.sellTime = utils.unixTime2YYYYMMDD(aRecord.sellTime);
        aRecord.interest = aRecord.interest + '%';
        return aRecord;
      },
      loadData () {
        let data = {
          pageNow: this.pageNow,
          pageSize: this.pageSize
        };

        api.getAllBuyPage(data).then(re => {
          console.log(re);
          this.tableData = re.data.data.content

        }).catch(e => {
          console.log(e)
          this.$notify({
            title: 'error',
            message: e
          });
        });
      },
      checked(comment,index){

      },
      handelCurrentChange(val){

      }
    }
  };
</script>

<style lang="scss" scoped>
    .basic-table {
        margin: 30px;
    }
</style>
