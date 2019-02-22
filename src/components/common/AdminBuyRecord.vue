<template>
  <div class="admin-buy-record" style="width: 100%">
    <h1>购买记录</h1>
    <basic-table :title="title" :labels="label" :data="tableData"/>

  </div>
</template>

<script>
/* eslint-disable */
  import api from '../../api/api';
  import basicTable from './BasicTableView';

  export default {
    name: 'admin-buy-record',
    components: {basicTable},
    beforeMount () {
      api.getAllBuyPage({pageNow: 1, pageSize: 10}).then((re) => {
        console.log(re);
        this.tableData=re.data.data.content;
      }).catch(e => {
        console.log(e);
      });
    },
    data () {
      return {
        title: '购买记录',
        label: {
          userName: '用户名',
          credit: '信用等级',
          interest: '利率',
          moneyNum: '总额',
          period: '周期',
          sellTime: '交易时间',
          status: '状态',
          userId: '用户id',

        },
        tableData: null
      };
    },
    methods:{

    }
  };
</script>

<style scoped>

</style>
