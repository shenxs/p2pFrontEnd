<template>
    <div class="user-center-topay">

        <div class="user-center-tosell">
            <basic-table
                    :title="title"
                    :tabledata="tData"
                    :labels="labels"
                    :total-elements="totalElements"
            />
        </div>
    </div>
</template>

<script>

  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'UserToPay',
    components: {basicTable},
    data () {
      return {
        title: '待还款',
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
        const data = {pageNow: this.pageNow, pageSize: this.pageSize, userId: this.userId};
        if (this.filterStr !== undefined) {
          data['sellName'] = this.filterStr.trim();
        }
        api.selectTwo(data).then(re => {
          this.requestData = JSON.parse(JSON.stringify(re.data.data));
          this.tData = re.data.data.map(this.$utils.parseData);
          this.totalElements = re.data.data.length;
        });

      }

    },
    beforeMount () {
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-topay{
        width: 100%;
    }
</style>
