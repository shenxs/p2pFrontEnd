<template>
    <div class="user-center-tosell">
        <basic-table
                :title="title"
                :tabledata="tData"
                :labels="labels"
                :total-elements="totalElements"
                @currentChange="handelCurrentChange"
                @refresh="loadData"
                @reset="handelRest"
                @filter="handelFilter"
        />
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  /* eslint-disable */
  export default {
    name: 'UserCenterTosell',
    components: {basicTable},
    data () {
      return {
        title: '未完成申请借款',
        requestData: null,
        tData: null,
        labels: {
          transactionId: '交易id',
          buyName: '借款目的',
          sellName: '出借目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式',
          sellStatus:'借款审核',
          buyStatus:'贷款审核'
        },
        filterStr: undefined,
        pageNow: 1,
        pageSize: 10,
        totalElements: 0,
        userId: 0
      };
    },
    methods: {
      loadData () {
        const data = {pageNow: this.pageNow, pageSize: this.pageSize, userId: this.userId};
        if (this.filterStr !== undefined) {
          data['transactionId'] = this.filterStr.trim();
        }
        api.selectThree(data).then(re => {
          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tData = re.data.data.content.map(this.$utils.parseData);
          this.totalElements = re.data.data.totalElements;
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
      handelFilter (filterStr) {
        // eslint-disable-next-line
        // console.log(filterStr);
        this.filterStr = filterStr;
        this.loadData();
      },
    },
    beforeMount () {
      let user = JSON.parse(localStorage.getItem('user'));
      this.userId = user.userId;
      this.loadData();
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-tosell {
        width: 100%;
    }
</style>
