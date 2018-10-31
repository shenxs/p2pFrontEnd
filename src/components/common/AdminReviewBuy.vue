<template>

    <div class="admin-review-buy" style="width: 100%">

        <basic-table
                :title="title"
                :labels="label"
                :tabledata="tableData"
                :totalElements="totalElements"
                :review="true"
                @checked="checked"
                @currentChange="handelCurrentChange"
        />

    </div>
</template>

<script>
  /* eslint-disable */
  import basicTable from '../common/BasicTableView';
  import api from '../../api/api';
  import utils from '../../utils';

  export default {
    name: 'admin-review-buy',
    components: {basicTable},
    beforeMount () {
      //获取数据
      this.loadData();
    },
    data () {
      return {
        label: {
          buyName: '贷款目的',
          interest: '利率',
          moneyNum: '总额(元)',
          period: '周期（天）',
          repaymentType:'还款方式',
          transactionTime:'交易时间',
          buyStatus: '贷款审核',
        },
        tableData: null,
        requestData: null,
        totalElements:0,
        title: '审核购买',
        pageNow: 1,
        pageSize: 10,

      };
    },
    methods: {
      parseData (aRecord) {
        aRecord.transactionTime = utils.unixTime2YYYYMMDD(aRecord.transactionTime);
        aRecord.interest = aRecord.interest + '%';
        if(aRecord.buyStatus==='N'){
          aRecord.buyStatus='未审核';
        }
        return aRecord;
      },
      loadData () {
        let data = {
          pageNow: this.pageNow,
          pageSize: this.pageSize,
          buyStatus:'N'
        };
        api.getTansitionByPage(data).then(re=>{

          this.requestData=JSON.parse(JSON.stringify(re.data.data.content));
          console.log(this.requestData);
          this.tableData=re.data.data.content.map(this.parseData);
          this.totalElements=re.data.data.totalElements;
        }).catch(e=>{
          console.log(e);
        })
      },
      checked (comment, index) {
        console.log(comment,index);
        let data=this.requestData[index];
        data.status=comment;
        api.updateBuy(data).then(re=>{
            console.log(re)
        }).catch(e=>{
          console.log(e)
        })
      },
      handelCurrentChange (val) {
        this.pageNow=val;
        this.loadData();
      }

    }
  };
</script>

<style lang="scss" scoped>
    .basic-table {
        margin: 30px;
    }
</style>
