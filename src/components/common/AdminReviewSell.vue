<template>

    <div class="review-sell" style="width: 100%">

        <basic-table
                :title="title"
                :labels="label"
                :tabledata="tableData"
                :review="true"
                @checked="checked"
                @currentChange="handelPageChange"
        />

    </div>
</template>

<script>

  /* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  import utils from '../../utils'
  export default {
    name: 'AdminReviewSell',
    components: {basicTable},
    data () {
      return {
        pageNow: 1,
        pageSize: 10,
        totalElemets: 1,
        title: '待审核出借',
        label: {
          userName: '用户名',
          credit: '信用等级',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          sellTime: '交易时间',
          status: '状态'
        },
        tableData: null, // 表格展示数据
        requestData: null// 请求所获的数据
      };
    },
    beforeMount () {
      this.loadData();
    },
    methods: {

      loadData () {
        const data = {pageNow: this.pageNow, pageSize: this.pageSize,sellStatus:'N'};
        api.getTansitionByPage(data).then(re=>{
          console.log(re);
          this.requestData=JSON.parse(JSON.stringify(re.data.data.content))
          this.tableData=re.data.data.content.map(this.parseData);
        })
      },
      checked (comment, index) {
        // 审核完成
        // console.log(comment, index);
        const data = this.requestData[index];
        data.status = comment;
        api.updateSell(data).then(re => {
          if (re.data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            this.tableData[index].status=comment;

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
        aRecord.sellTime = utils.unixTime2YYYYMMDD(aRecord.sellTime);
        aRecord.interest = aRecord.interest + '%';
        return aRecord;
      },
      handelPageChange(val){
        this.pageNow=val;
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
