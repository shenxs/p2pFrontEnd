<template>

    <div class="basicTable">

        <div class="u-table-title">
            <h1>{{ title }}</h1>

            <div class="m-filter-container">
                <el-input style="width: 200px" placeholder="请输入用户名"/>
                <el-select :value="queryValue" class="f-filter-item">
                    <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
                </el-select>

                <el-select
                        v-model="listQuery.type"
                        :value="queryValue"
                        clearable
                        class="f-filter-item"
                        style="width: 130px">
                    <el-option
                            v-for="item in calendarTypeOptions"
                            :key="item.key"
                            :label="item.display_name+'('+item.key+')'"
                            :value="item.key"/>
                </el-select>

                <el-button v-waves class="f-filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
                    筛选
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
                        v-for="(index, key) in labels"
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
            </el-table>
        </div>

        <div class="pagination-block">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <el-pagination
                            :total="totalElemets"
                            background
                            layout="prev, pager, next"
                            @current-change="handelCurrentChange"/>
                </el-col>
            </el-row>
        </div>

    </div>

</template>

<script>

  /* eslint-disable */
  import ElSlPanel from 'element-ui/packages/color-picker/src/components/sv-panel';
  // eslint-disable-next-line
  import utils from '../../utils';
  import waves from '../../directive/waves'; // 水波纹指令

  const calendarTypeOptions = [
    {key: 'CN', display_name: 'China'},
    {key: 'US', display_name: 'USA'},
    {key: 'JP', display_name: 'Japan'},
    {key: 'EU', display_name: 'Eurozone'}
  ];

  // arr to obj ,such as { CN : "China", US : "USA" }
  const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name;
    return acc;
  }, {});

  export default {
    name: 'basic-table-view',
    components: {ElSlPanel},
    directives: {
      waves
    },
    props: ['title', 'labels', 'tabledata', 'review'],
    data () {
      return {
        tData: this.tabledata,
        tableKey: 0,
        queryValue: '',
        totalElemets: 1000,

        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        },
        importanceOptions: [1, 2, 3],
        calendarTypeOptions,
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        temp: {
          id: undefined,
          importance: 1,
          remark: '',
          timestamp: new Date(),
          title: '',
          type: '',
          status: 'published'
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        pvData: [],
        rules: {
          type: [{required: true, message: 'type is required', trigger: 'change'}],
          timestamp: [{type: 'date', required: true, message: 'timestamp is required', trigger: 'change'}],
          title: [{required: true, message: 'title is required', trigger: 'blur'}]
        },
        downloadLoading: false
      };
    },
    watch: {
      // tabledata: function () {
      //   // this.tData = this.tabledata.slice();
      //   // this.tData = this.tData.map(this.parseData);
      // }
    },
    beforeMount () {

    },
    methods: {
      //传入数据和意见
      makeReview (row, comment, index) {
        // console.log(row, comment, index);
        // this.tData.splice(index.$index, 1);
        this.$emit('checked', comment, index.$index);
      },
      handleFilter () {

      },
      handelCurrentChange (val) {
        this.$emit('currentChange', val);
      }

    }

  };
</script>

<style lang="scss" scoped>
    .basicTable {
        margin: 0 30px;

        .m-filter-container {
            margin-bottom: 10px;
            .f-filter-item {
                margin-left: 10px;
            }
        }
        .el-table {
            margin-bottom: 10px;
        }

    }
</style>
