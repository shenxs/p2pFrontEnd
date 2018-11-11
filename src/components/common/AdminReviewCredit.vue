<template>

    <div class="admin-review-credit" style="width: 100%">
        <basic-table
                :review="true"
                :tabledata="tableData"
                :labels="labels"
                :totalElements="totalElements"
                :pageSize="pageSize"
                @checked="checked"
        />
    </div>
</template>

<script>
  /* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api'

  export default {
    name: 'AdminReviewCredit',
    components: {basicTable},

    data () {

      return {
        title: '审核信用评级',
        tableData: null,
        labels: {
          userId: '用户id',
          username: '用户姓名',
          job: '职业',
          creator: '当前信用等级',
          expectedCredit: '期望信用等级',
        },
        totalElements: null,
        pageNow: 1,
        pageSize: 1000,
        filterStr: undefined,
      };
    },
    methods: {
      checked (comment, row) {
        api.changeCreditYes({userId:row.userId}).then(res=>{
          let msg = comment=="pass"?"通过" : "拒绝"
          this.$message({
            message:msg,
            type:'success'
          });
          this.loadData()
        })
      },
      loadData(){
        api.getChangeCredit({}).then(res => {
          this.tableData = res.data.data;
        })
      }
    },
    mounted () {
      this.loadData()
    }
  };
</script>

<style lang="scss" scoped>

</style>
