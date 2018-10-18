<template>
    <div class="borrowLoadInfo">
        <h1>借贷信息</h1>
        <hr/>
        <el-row>
            <transation-table class="tanstable" :table-name="'借款'" :table-data="tableData"></transation-table>
        </el-row>

        <el-row>
            <transation-table class="tanstable" :table-name="'贷款'" :table-data="tableData"></transation-table>
        </el-row>
    </div>
</template>

<script>

    import transationTable from './transationTable'
    import testComponent from './test'

    export default {
        name: "borrowLoanInfo",
        components: {transationTable, testComponent},
        data() {
            return {
                tableData: [
                    {
                        transation_id: 32211,
                        transation_name: "初识交易",
                        transation_time: "2018-10-13",
                        sell_id: 332,
                        buy_id: 331,
                        sell_name: "割肉卖出",
                        buy_name: "捡到宝le",
                        money_num: 1000,
                        period: 11,
                        interest: 7
                    },
                    {
                        transation_id: 32211,
                        transation_name: "初识交易",
                        transation_time: 2018 - 10 - 13,
                        sell_id: 332,
                        buy_id: 331,
                        sell_name: "割肉卖出",
                        buy_name: "捡到宝le",
                        money_num: 1000,
                        period: 11,
                        interest: 7
                    },
                    {
                        transation_id: 32211,
                        transation_name: "初识交易",
                        transation_time: 2018 - 10 - 13,
                        sell_id: 332,
                        buy_id: 331,
                        sell_name: "割肉卖出",
                        buy_name: "捡到宝le",
                        money_num: 1000,
                        period: 11,
                        interest: 7
                    },
                    {
                        transation_id: 32211,
                        transation_name: "初识交易",
                        transation_time: 2018 - 10 - 13,
                        sell_id: 332,
                        buy_id: 331,
                        sell_name: "割肉卖出",
                        buy_name: "捡到宝le",
                        money_num: 1000,
                        period: 11,
                        interest: 7
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .el-row {
        margin-top: 40px;
        margin-bottom: 30px;
    }
</style>
