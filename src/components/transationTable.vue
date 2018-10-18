<template>
    <div class="transationTable">

        <label> {{tableName}}</label>

        <el-table :data="tableData"
                  :default-sort="{prop: 'transation_id', order: 'descending'}"
                  stripe>
            <el-table-column
                    prop="transation_id"
                    label="交易id"
                    sortable>

            </el-table-column>
            <el-table-column
                    prop="transation_name"
                    sortable
                    label="交易名称">
            </el-table-column>
            <el-table-column
                    prop="transation_time"
                    label="交易时间"
                    sortable>
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.transation_time }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="sell_id"
                    label="借款id"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="buy_id"
                    label="贷款id"
                    sortable>
            </el-table-column>

            <el-table-column
                    prop="sell_name"
                    label="借款名">
            </el-table-column>
            <el-table-column
                    prop="buy_name"
                    label="贷款名">
            </el-table-column>
            <el-table-column
                    prop="money_num"
                    label="交易数"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="period"
                    label="借贷周期"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="interest"
                    label="借贷利率"
                    sortable>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        name: "transationTable",
        props: [
            'tableName',
            'tableData'
        ]

    }
</script>

<style scoped>

</style>
