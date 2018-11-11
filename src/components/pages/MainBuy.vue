<template>
    <div>
        <basic-table
                :buy="true"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                :pageSize="pageSize"
                :sellOrBuy="'buy'"
                @currentChange="handelCurrentChange"
                @refresh="loadData"
                @reset="handelRest"
                @deal="handelBuy"
                @filter="handelFilter"
                @auth="handelAuth"
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
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式'
        },
        totalElements: null,
        pageNow: 1,
        pageSize: 20,
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
          data['buyName'] = this.filterStr;
        }
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
      handelCurrentChange (val) {
        this.pageNow = val;
        this.loadData();
      },
      handelRest () {
        this.pageNow = 1;
        this.filterStr = undefined;
        this.loadData();
      },
      handelBuy (row, reason) {
        //eslint-disable-next-line
        console.log(row);
        let data = row;
        let user = JSON.parse(localStorage.getItem('user'));
        data.sellName = reason;
        data.sellId = user.userId;
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
      handelFilter (filterStr) {
        // eslint-disable-next-line
        console.log(filterStr);
        this.filterStr = filterStr;
        this.loadData();
      },
      handelAuth (dialog) {
        this.$alert(dialog);
      }
    }
  };
</script>

<style scoped>

</style>
