<template>
    <div class="basicTable">
        <div class="u-table-title">
            <div class="m-table-title">
                <h1>{{ title }}</h1>
            </div>

            <div class="m-filter-container">
                <el-input clearable="" v-model="filterStr" style="width: 200px" placeholder="输入搜索字段"/>
                <el-button v-waves class="f-filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
                    筛选
                </el-button>
                <el-button v-waves class="f-reset-item" type="primary" icon="" @click="handelReset">
                    重置
                </el-button>
                <el-button v-waves class="f-refresh-item" type="primary" icon="el-icon-refresh"
                           @click="$emit('refresh')">
                    刷新
                </el-button>
            </div>
            <el-table
                    :data="tabledata"
                    stripe
                    border
                    fit
                    highlight-current-row
                    style="width: 100%;">
                <el-table-column
                        align="center"
                        v-for="(index, key) in labels"
                        sortable
                        :key="index"
                        :prop="key"
                        :label="index"/>

                <el-table-column
                        v-if="review"
                        fixed="right"
                        label="审核"
                        width="150"
                        align="center"
                        class-name="small-padding fixed-width">
                    <template slot-scope="scope">
                        <el-button type="success" size="mini" @click="makeReview(scope.row,'pass',scope)">
                            通过
                        </el-button>
                        <el-button size="mini" type="danger" @click="makeReview(scope.row,'reject',scope)">
                            拒绝
                        </el-button>
                    </template>
                </el-table-column>

                <el-table-column
                        v-if="buy"
                        fixed="right"
                        width="150"
                        label="action"
                        align="center">
                    <template slot-scope="scope">
                        <el-button type="success" size="mini" @click="goDetail(scope.row,scope)">
                            详情
                        </el-button>
                        <el-button type="danger" size="mini" @click="handelBuy(scope.row,scope)">
                            购买
                        </el-button>
                    </template>
                </el-table-column>


            </el-table>
        </div>
        <div class="u-pagination-block">
            <el-row :gutter="20">
                <el-col :span="20" :offset="7">
                    <el-pagination
                            :page-size="pageSize"
                            :total="totalElements"
                            background
                            :current-page.sync="currentPage"
                            layout="prev, pager, next"
                            @current-change="handelCurrentChange"/>
                </el-col>
            </el-row>
        </div>


        <el-dialog :title="'购买'" :visible.sync="dialogBuyFormVisible">
            <el-form label-width="80px">
                <el-form-item label="购买原因">
                    <el-input v-model="reason" placeholder="输入您的交易理由"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleConfirmBuy">确定</el-button>
                    <el-button @click="dialogBuyFormVisible=false">取消</el-button>
                </el-form-item>
            </el-form>

        </el-dialog>

    </div>

</template>

<script>

  /* eslint-disable */
  import ElSlPanel from 'element-ui/packages/color-picker/src/components/sv-panel';

  import waves from '../../directive/waves'; // 水波纹指令

  export default {
    name: 'basic-table-view',
    components: {ElSlPanel},
    directives: {
      waves
    },
    props: {
      title: String,
      labels: Object,
      tabledata: Array,
      totalElements: Number,
      review: Boolean,
      buy: Boolean,
      pageSize: {
        type: Number,
        default: 10
      }
    },
    data () {
      return {
        tData: this.tabledata,
        tableKey: 0,
        queryValue: '',
        sortValue: '',
        filterStr: '',
        total: null,
        currentPage: 1,
        dialogBuyFormVisible: false,
        tryToBuyOrSell: null,
        reason: '',
        rules: {
          type: [{required: true, message: 'type is required', trigger: 'change'}],
          timestamp: [{type: 'date', required: true, message: 'timestamp is required', trigger: 'change'}],
          title: [{required: true, message: 'title is required', trigger: 'blur'}]
        },
        downloadLoading: false
      };
    },

    methods: {
      //传入数据和意见
      makeReview (row, comment) {
        console.log(row, comment);
        this.$emit('checked', comment, row);
      },
      handleFilter () {
        this.$emit('filter', this.filterStr);
      },
      handelCurrentChange (val) {
        this.$emit('currentChange', val);
      },
      handelReset () {
        this.currentPage = 1;
        this.filterStr = '';
        this.$emit('reset');
      },
      goDetail (row, scope) {
        console.log('detail', row, scope);
        this.$router.push({name: 'detail', params: {transactionId: row.transactionId}});
      },
      handelBuy (row, scope) {
        // console.log(row, scope);
        this.tryToBuyOrSell = row;

        this.dialogBuyFormVisible = true;
      },
      handleConfirmBuy () {
        // console.log('hello');
        this.dialogBuyFormVisible = false;
        this.$emit('deal', this.tryToBuyOrSell, this.reason);

      }
    }

  };
</script>

<style lang="scss" scoped>
    .basicTable {
        margin: 0 30px;
        .m-table-title {
            text-align: center;
            margin: 20px;
        }

        .m-filter-container {
            margin-bottom: 10px;
            .f-filter-item {
                margin-left: 10px;
            }
            .f-refresh-item {
                margin-left: 10px;
            }
        }
        .el-table {
            margin-bottom: 10px;
        }
        .u-pagination-block {
            margin-bottom: 10px;
        }

    }
</style>
