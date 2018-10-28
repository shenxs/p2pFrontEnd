<template>
    <div class="basicTable">
        <div class="u-table-title">
            <h1>{{title}}</h1>
            <el-table :data="data" stripe>
                <el-table-column
                        v-for="(index, key) in labels"
                        :key="index" :prop="key" :label="index"/>
            </el-table>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'basic-table-view',
    props: ['title', 'labels', 'data']
  };
</script>

<style lang="scss" scoped>
    .basicTable{
        margin: 0 30px;
    }
</style>
