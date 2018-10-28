<template>
    <div class="admin-review-buy" style="width: 100%">
        <h1>管理员审核购买</h1>
        <basic-table :title="'购买列表'" :data="tableData" :labels="labels"></basic-table>


    </div>
</template>

<script>
  /* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';

  export default {
    name: 'admin-review-buy',
    components: {basicTable},
    beforeMount () {


    },
    data () {
      return {
        labels: {
          userName: '购买人',
          sell: '姓名',
          address: '地址'
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      };
    }
  };
</script>

<style lang="scss" scoped>
    .basic-table {
        margin: 30px;
    }
</style>
