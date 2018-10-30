<template>
    <div class="review-sell" style="width: 100%">

        <basic-table :title="title" :labels="label" :tabledata="tableData" :review="true"
                     v-on:checked="checked"></basic-table>

    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'admin-review-sell',
    components: {basicTable},
    beforeMount () {
      this.loadData();
    },
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
        tableData: null,//表格展示数据
        requestData: null//请求所获的数据
      };
    },
    methods: {

      loadData () {
        let data = {pageNow: this.pageNow, pageSize: this.pageSize};
        api.getAllSellPage(data).then(re => {
          // eslint-disable-next-line
          // console.log(re);
          this.tableData = re.data.data.content;
          this.totalElemets = re.data.data.totalElements;
        }).catch(e => {
          this.$notify({
            title: 'error',
            message: e
          });
        });
      },
      checked (comment, index) {
        //审核完成

        // console.log(comment, index);
        let data = this.tableData[index];
        data.status = comment;
        api.updateSell(
          data
        ).then(re => {
          if (re.data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            // _this.tableData[index].status = comment;
          } else {
            this.$message({
              message: '操作失败',
              type: 'fail'
            });
          }
        }).catch(e => {
          alert(e)
        });

      },
      handelCurrentChange (val) {
        this.pageNow = val;
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
