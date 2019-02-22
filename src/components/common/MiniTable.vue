<template>
    <el-table :data="tableData">
        <el-table-column
                align="center"
                v-for="(index, key) in labels"
                :key="index"
                :prop="key"
                :label="index"/>
        <el-table-column
                fixed="right"
                width="100"
                align="center"
                class-name="small-padding fixed-width">
            <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="goDetail(scope.row)">
                    详情
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: 'MiniTable',
    props: ['tableData','labels'],
    methods:{
      goDetail(row){
        // eslint-disable-next-line
        console.log(row);
        this.$router.push({name:'detail',params:{transactionId:row.transactionId}})
      }
    }
  };
</script>

<style scoped>

</style>
