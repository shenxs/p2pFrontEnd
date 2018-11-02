<template>
    <div class="user-center-deals-done">

        <basic-table
                :title="title"
        />
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';

  export default {
    name: 'UserCenterDealsDone',
    components: {basicTable},
    data () {
      return {
        title: '已完成交易'
      };
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-deals-done {
        width: 100%;
    }
</style>
