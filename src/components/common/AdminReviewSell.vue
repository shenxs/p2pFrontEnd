<template>

    <div class="review-sell" style="width: 100%">
        <basic-table
                :title="title"
                :labels="label"
                :tabledata="tableData"
                :totalElements="totalElements"
                :sortLabels="sortlabels"
                :review="true"
                @checked="checked"
                @currentChange="handelPageChange"
                @refresh="loadData"
                @filter="handelFilter"
                @reset="handelReset"
        />

    </div>
</template>

<script>

  /* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  import utils from '../../utils';

  export default {
    name: 'AdminReviewSell',
    components: {basicTable},
    beforeMount () {
      this.loadData();
    },
    data () {
      return {
        pageNow: 1,
        pageSize: 10,
        totalElements: 1,
        title: '待审核借款',
        label: {
          transactionId: '交易id',
          buyName: '借款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType: '还款方式',
          transactionTime: '交易时间',
          sellStatus: '借款审核'
        },
        sortlabels: [
          {key: 'interest', display_name: '利率'},
          {key: 'moneyNum', display_name: '总额'},
          {key: 'period', display_name: '周期'},
          {key: 'transactionTime', display_name: '交易时间'}]
        ,
        tableData: null, // 表格展示数据
        requestData: null// 请求所获的数据
      };
    },

    methods: {

      loadData (str) {
        const data = {pageNow: this.pageNow, pageSize: this.pageSize, sellStatus: 'N'};
        if (str !== undefined) {
          data['sellName'] = str.trim();
        }
        api.getTansitionByPage(data).then(re => {

          console.log(re);

          this.requestData = JSON.parse(JSON.stringify(re.data.data.content));
          this.tableData = re.data.data.content.map(this.parseData);
          this.totalElements = re.data.data.totalElements;
        });
      },
      checked (comment, row) {
        // 审核完成
        // console.log(comment, index);
        const data = this.requestData.filter(x => x.transactionId === row.transactionId)[0];
        if (comment === 'pass')
          data.sellStatus = 'Y';
        else if (comment === 'reject')
          data.sellStatus = 'D';
        api.updateTransation(data).then(re => {
          if (re.data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            if (comment === 'pass')
              row.sellStatus = '通过';
            else if (comment === 'reject')
              row.sellStatus = '拒绝';
          } else {
            this.$message({
              message: '操作失败',
              type: 'fail'
            });
          }
        }).catch(e => {
          alert(e);
        });
      },
      parseData (aRecord) {
        aRecord.transactionTime = utils.unixTime2YYYYMMDD(aRecord.transactionTime);
        aRecord.interest = aRecord.interest + '%';
        if (aRecord.sellStatus === 'N')
          aRecord.sellStatus = '未审核';
        return aRecord;
      },
      handelPageChange (val) {
        this.pageNow = val;
        this.loadData();
      },
      handelFilter (str) {
        console.log(str);
        if (str.trim() === '') {
          this.$notify({
            title: 'error',
            message: '请输入筛选关键字',
            duration: 1000
          });
        } else {
          this.loadData(str);
        }
      },
      handelReset () {
        this.pageNow = 1;
        this.loadData();
      }
    }
  };
</script>

<style lang="scss" scoped>

    .review-sell {
        .pagination-block {
            margin-top: 10px;
            align-items: center;
            width: auto;
            .el-pagination {
                align-self: center;
            }
        }
    }
</style>
