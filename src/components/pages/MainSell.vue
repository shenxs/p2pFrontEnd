<template>
    <div>
        <basic-table
                :buy="true"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                :pageSize="pageSize"
                :sellOrBuy="'sell'"
                @currentChange="handelCurrentChange"
                @reset="handleRest"
                @refresh="handelRefresh"
                @deal="handelSell"
                @filter="handelFilter"
                @Auth="handelAuth"
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
        pageNow: 1,
        pageSize: 20,
        totalElements: 0,
        filterStr: undefined
      };
    },
    beforeMount () {
      this.loadData();
    },
    methods: {
      loadData () {
        const data = {pageNow: this.pageNow, pageSize: this.pageSize};
        if (this.filterStr !== undefined) {
          data['transectionId'] = this.filterStr;
        }
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
      handelCurrentChange (val) {
        this.pageNow = val;
        this.loadData();
      },
      handleRest () {
        this.pageNow = 1;
        this.filterStr = undefined;
        this.loadData();
      },
      handelRefresh () {

        this.loadData();
      },
      handelSell (row, reason) {
        //eslint-disable-next-line
        console.log(row);
        let data = row;
        let user = JSON.parse(localStorage.getItem('user'));
        data.buyName = reason;
        data.buyId = user.userId;
        data.transactionTime = (new Date()).getTime();
        api.updateTransation(data).then(re => {
          // eslint-disable-next-line
          console.log(re);
          if (re.data.code === 0) {
            this.$notify({
              message: '交易成功',
              type: 'success'
            });
            this.loadData();
          } else {
            this.$notify({
              message: '交易失败',
              type: 'failed'
            });
          }
        }).catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
      },
      handelFilter (str) {
        this.filterStr = str;
        this.loadData();
      },
      handelAuth (AuthDialog) {
        let user = JSON.parse(localStorage.getItem('user'));
        api.addTransaction({
          buyId: user.userId,
          ...AuthDialog
        }).then(re => {
          if (re.data.code === 0) {
            this.$message({
              message: '授权成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '授权失败',
              type: 'fail'
            });
          }
        }).catch(e => {
          this.$alert(e);
        });
      }
    }
  };
</script>

<style scoped>

</style>
