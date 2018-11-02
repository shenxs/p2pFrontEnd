<template>
    <div class="user-center-tosell">

        <basic-table
                :title="title"
        />
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';

  export default {
    name: 'UserCenterTobuy',
    components: {basicTable},
    data () {
      return {
        title: '待审核购买'
      };
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-tosell {
        width: 100%;
    }
</style>
