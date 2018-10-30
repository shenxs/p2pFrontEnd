<!--suppress ALL -->
<template>
  <div class="admin-user-management">
    <basic-detail :detail-data="detailData"/>
  </div>
</template>

<script>
/* eslint-disable */
    import basicDetail from './BasicDetailView'
    import api from '../../api/api'
  export default {
    name: 'admin-user-management',
    components: {basicDetail},
    beforeMount(){
      api.getBuyByUserId({userId:300}).then((re)=>{
        console.log(re);
        this.detailData=re.data.data[0];
      }).catch(e=>{
        console.log(e);
      })
    },
    data(){
      return{
        detailData:{
          deBuyId: 102,
          userId: 300,
          userName: "程方正",
          sellTime: 1532275200000,
          moneyNum: 192000,
          period: 90,
          interest: 8.4,
          credit: 2,
          status: 0
        }
      }
    }
  };
</script>

<style scoped>
    .admin-user-management {
        width: 100%;
    }

</style>
