<template>
    <div class="transition">

        <basic-table
                :title="title"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                @currentChange="handelCurrentChange"
        ></basic-table>


    </div>
</template>

<script>
  import api from '../../api/api';
  import basicTable from './BasicTableView';

  export default {
    name: 'AdminTransition',
    components: {basicTable},
    beforeMount () {
      this.loadData();
    },
    data () {
      return {
        title: '所有交易记录',
        requestData: null,
        tableData: null,
        pageSize: 10,
        pageNow: 1,
        totalElements:1,
        labels: {
          transactionId:'交易id',
          buyId: '借款id',
          sellId:'贷款id',
          buyName: '借款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式',
          transactionTime: '交易时间',
          sellStatus: '借款审核',
          buyStatus:'贷款审核'
        }
      };
    },
    methods: {
      loadData (str) {
        let data = {pageNow: this.pageNow, pageSize: this.pageSize};
        if (str !== undefined) {
          data['transactionName'] = str;
        }
        api.getTansitionByPage(data).then(re => {
          /* eslint-disable */
          console.log(re);
          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tableData = re.data.data.content.map(this.$utils.parseData);
          this.totalElements=re.data.data.totalElements;
        }).catch(e => {
          /* eslint-disable */
          console.log(e);
          this.$alert(e);
        });
      },
      handelCurrentChange(val){
        /* eslint-disable */
        console.log(val);
        this.pageNow=val;
        this.loadData()
      }
    }
  };
</script>

<style scoped>

</style>
