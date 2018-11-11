import axios from 'axios';

axios.defaults.withCredentials = true;
const server = axios.create({
  baseURL: 'http://120.78.87.58:8083',
  timeout: 5000

});

const apiDes = [
  {
    fun: 'sendsms',
    url: '/message/getMessage',
    method: 'post',
    params: ['phoneNumber']
  }, {
    fun: 'register',
    url: '/admin/addregister',
    method: 'post',
    params: ['username', 'password', 'role', 'phoneNumber', 'verificationCode']
  }, {
    fun: 'logout',
    url: '/admin/logout',
    method: 'post',
    params: []
  }, {
    // 登录时获取验证码
    fun: 'getLoginMessage',
    url: '/message/getLoginMessage',
    method: 'post',
    params: ['username']
  }, {
    // 获取个人信息
    fun: 'getById',
    url: '/userInformation/getById',
    method: 'post',
    params: ['userId']
  }, {
    // 获取所有人的信息
    fun: 'getAllUser',
    url: '/userInformation/getAll',
    method: 'post',
    params: ['pageNow', 'pageSize']
  }, {
    // 新增贷款
    fun: 'addSell',
    url: '/deSell/insert',
    method: 'post',
    params: ['userId', 'moneyNum', 'period', 'interest', 'credit']
  }, {
    // 修改贷款
    fun: 'updateSell',
    url: '/deSell/update',
    method: 'post',
    params: ['deSellId', 'moneyNum', 'period', 'interest', 'credit']
  }, {
    fun: 'getSellBySellId',
    url: '/deSell/getBySellId',
    method: 'post',
    params: ['sellId']
  }, {
    fun: 'getSellByUserId',
    url: '/deSell/getByUserId',
    method: 'post',
    params: ['userId']
  }, {
    fun: 'getAllSell',
    url: '/deSell/getAll',
    method: 'post',
    params: []
  }, {
    fun: 'getAllSellPage',
    url: '/deSell/getByPage',
    method: 'post',
    params: ['pageNow', 'pageSize']
  }, {
    fun: 'addBuy',
    url: '/deBuy/insert',
    method: 'post',
    params: ['userId', 'moneyNum', 'period', 'interest', 'credit']
  }, {
    // 修改待借
    fun: 'updateBuy',
    url: '/deBuy/getByBuyId',
    method: 'post',
    params: ['deBuyId', 'moneyNum', 'period', 'interest', 'credit']
  }, {
    // 查看某一具体待借
    fun: 'getBuyByBuyId',
    url: '/deBuy/getByBuyId',
    method: 'post',
    params: ['buyId']
  }, {
    // 查看某一客户待借
    fun: 'getBuyByUserId',
    url: '/deBuy/getByUserId',
    method: 'post',
    params: ['userId']
  }, {
    // 查看所有待借
    fun: 'getAllBuy',
    url: '/deBuy/getAll',
    method: 'post',
    params: []
  }, {
    // 查看所有待借(分页)
    fun: 'getAllBuyPage',
    url: '/deBuy/getAll',
    method: 'post',
    params: ['pageNow', 'pageSize']
  }, {
    fun: 'getTansitionByPage',
    url: '/transaction/getByPage.do',
    method: 'post',
    params: ['pageNow', 'pageSize']
  }, {
    //更新transition
    fun: 'updateTransation',
    url: '/transaction/update.do',
    method: 'post',
    parmas: ['transactionId']
  }, {
    //获得总购或总贷的金额
    fun: 'getMoney',
    url: '/statistics/getMoney',
    method: 'post',
    parmas: ['type', 'period']
  }, {
    //获得一段时间的累计金额
    fun: 'getMoneyByTime',
    url: '/statistics/getStatistic',
    method: 'post',
    params: ['type', 'period', 'startTime', 'endTime']
  }, {
    fun: 'getSellByPage',
    url: '/transaction/getSellByPage.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize']
  }, {
    fun: 'getBuyByPage',
    url: '/transaction/getBuyByPage.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize']
  }, {
    fun: 'selectOne',
    url: '/transaction/selectOne.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize', 'userId']
  },
  {
    fun: 'selectTwo',
    url: '/transaction/selectTwo.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize', 'userId']
  },
  {
    fun: 'selectThree',
    url: '/transaction/selectThree.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize', 'userId']
  }
  , {
    fun: 'selectFour',
    url: '/transaction/selectFour.do',
    method: 'post',
    parmas: ['pageNow', 'pageSize', 'userId']
  }, {
    fun: 'getAssets',
    url: '/asset/getByUserId',
    method: 'post',
    params: ['userId']
  }, {
    fun: 'insertAsset',
    url: '/asset/insert',
    method: 'post',
    parmas: ['userId', 'assessCertification', 'assessmenValue', 'assetType']
  }, {
    fun: 'deleteAsset',
    url: '/asset/delete',
    method: 'post',
    params: ['assetId']
  }, {
    fun: 'updateAsset',
    url: '/asset/update',
    method: 'post',
    params: ['assetId']
  }, {
    fun: 'getCards',
    url: '/card/getByUserId',
    method: 'post',
    params: ['userId']
  },{
    fun:'insertCard',
    url:'/card/insert',
    method:'post',
    params:['userId','cardNum']
  },{
    fun:'deleteCard',
    url:'/card/delete',
    method:'post',
    params:['cardId']
  },{
    fun:'getPersonCredit',
    url:'/userInformation/getPersonCredit',
    method:'post',
    params:['userId']
  },{
    fun:'changeOO',
    url:'/status/changeOO',
    method:'post',
    params:['transactionId']
  },{
    fun:'addTransaction',
    url:'/transaction/insert.do',
    method:'post',
    params:['period','interest','repaymentType']
  }
];

// 由接口描述生成接口调用函数
function ApiGenerator (des) {
  const api = {};
  for (const i in des) {
    api[des[i].fun] = function (data) {
      for (const j in des[i].params) {
        if (!(({}).hasOwnProperty.call(data, des[i].params[j]))) {
          return (new Promise((resolve, reject) => {
            reject(des[i].params[j] + ' not in params');
          }));
        }
      }
      // eslint-disable-next-line
      console.log(des[i].fun, data);
      return server({
        url: des[i].url,
        method: des[i].method,
        data
      });
    };
  }

  // 添加update函数
  api['update'] = function (data) {
    // eslint-disable-next-line
    console.log('update', data);
    return server({
      url: '/userInformation/update',
      method: 'post',
      data
    });
  };
  return api;
}

const api = ApiGenerator(apiDes);

export default api;
