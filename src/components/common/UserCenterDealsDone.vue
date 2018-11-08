<template>
    <div class="user-center-deals-done">

        <basic-table
                :title="title"
                :tabledata="tData"
                :labels="labels"
                :totalElements="totalElements"
                @reset="handelRest"
        />
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  /* eslint-disable */
  export default {
    name: 'UserCenterDealsDone',
    components: {basicTable},
    data () {
      return {
        title: '已完成交易',
        tData: [],
        labels: {
          transactionId: '交易id',
          buyId: '借款id',
          sellId: '贷款id',
          buyName: '借款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式',
          transactionTime: '交易时间',
          sellStatus: '借款审核',
          buyStatus: '贷款审核'
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
        const data = {
          pageNow: this.pageNow,
          pageSize: this.pageSize,
          buyStatus: 'Y',
          sellStatus: 'Y',
          sellId: this.userId
        };
        if (this.filterStr !== undefined) {
          data['sellName'] = str.trim();
        }
        api.getTansitionByPage(data).then(re => {
          console.log(re);
          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tData.push(...re.data.data.content.map(this.$utils.parseData));
          this.totalElements = re.data.data.totalElements;
        });
        const data2 = {
          pageNow: this.pageNow, pageSize: this.pageSize, buyStatus: 'Y', sellStatus: 'Y'
          , buyId: this.userId
        };
        api.getTansitionByPage(data).then(re => {
          console.log(re);
          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tData.push(...re.data.data.content.map(this.$utils.parseData));
          this.totalElements = re.data.data.totalElements;
        });

      },
      handelRest(){
        this.tData=[];
        this.loadData();
      }
    },
    beforeMount () {
      let user = JSON.parse(localStorage.getItem('user'));
      this.userId = user.userId;
      this.loadData();
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-deals-done {
        width: 100%;
    }
</style>
