<template>
    <div>
        <basic-table
                :buy="true"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                :pageSize="pageSize"
                @currentChange="handelCurrentChange"
                @reset="handleRest"
                @refresh="handelRefresh"
        ></basic-table>
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'MainSell',
    components: {basicTable},
    data () {
      return {
        tableData: null,
        labels: {
          transactionId: '交易id',
          sellName: '借款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式'
        },
        pageNow:1,
        pageSize:20,
        totalElements: 0
      };
    },
    beforeMount () {
      this.loadData();
    },
    methods: {
      loadData () {
        const data = {pageNow: this.pageNow, pageSize: this.pageSize};
        api.getSellByPage(data).then(re => {
          // eslint-disable-next-line
          console.log(re);
          this.tableData = re.data.data.content;
          this.totalElements = re.data.data.totalElements;
        }).catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
      },
      handelCurrentChange(val){
        this.pageNow=val;
        this.loadData();
      },
      handleRest(){
        this.pageNow=1;
        this.loadData();
      },
      handelRefresh(){
        // eslint-disable-next-line
        // console.log('hhhh');
        this.loadData();
      }
    }
  };
</script>

<style scoped>

</style>
