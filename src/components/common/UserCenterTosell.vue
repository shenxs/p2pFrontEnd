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
    name: 'UserCenterTosell',
    components: {basicTable},
    data () {
      return {
        title: '待审核出借'
      };
    }
  };
</script>

<style lang="scss" scoped>
    .user-center-tosell {
        width: 100%;
    }
</style>
