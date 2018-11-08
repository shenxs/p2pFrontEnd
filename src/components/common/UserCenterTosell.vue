<template>
    <div class="user-center-tosell">
        <basic-table
                :title="title"
                :tabledata="tData"
                :labels="labels"
                :total-elements="totalElements"
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
        title: '待审核出借',
        requestData: null,
        tData: null,
        labels: {
          transactionId: '交易id',
          buyName: '贷款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式'
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
        const data = {pageNow: this.pageNow, pageSize: this.pageSize, sellStatus:'N', sellId: this.userId};
        if (this.filterStr !== undefined) {
          data['sellName'] = this.filterStr;
        }
        api.getTansitionByPage(data).then(re => {
          console.log(re);
          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tData = re.data.data.content.map(this.$utils.parseData);
          this.totalElements = re.data.data.totalElements;
        });

      }
    },
    beforeMount () {
      let user = JSON.parse(localStorage.getItem('user'));
      this.userId=user.userId;
      this.loadData();
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-tosell {
        width: 100%;
    }
</style>
