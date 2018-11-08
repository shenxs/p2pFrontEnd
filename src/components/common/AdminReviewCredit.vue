<template>

    <div class="admin-review-credit" style="width: 100%">
        <basic-table
                :title="title"
        />
    </div>
</template>

<script>
  import basicTable from '../common/BasicTableView';

  export default {
    name: 'AdminReviewCredit',
    components: {basicTable},

    data () {

      return {
        title: '审核信用评级'
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
