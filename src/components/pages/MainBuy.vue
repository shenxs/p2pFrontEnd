<template>
    <div>
        <basic-table
                :buy="true"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                @currentChange="handelCurrentChange"
                @refresh="loadData"
                @reset="handelRest"
        ></basic-table>
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'MainBuy',
    components: {basicTable},
    data () {
      return {
        tableData: null,
        labels: {
          transactionId: '交易id',
          buyName: '贷款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式',
        },
        totalElements: null,
        pageNow:1,
        filterStr:undefined
      };
    },
    beforeMount () {
      this.loadData();
    },
    methods: {
      loadData () {
        const data = {pageNow: this.pageNow, pageSize: 20};
        api.getBuyByPage(data).then(re => {
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
      handelRest(){
        this.pageNow=1;
        this.loadData();
      }
    }
  };
</script>

<style scoped>

</style>
