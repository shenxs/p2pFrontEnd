import indexMain from '../components/index-main'
import userCenter from '../components/userCenter'
import creditRating from '../components/creditRating'

import borrowLoanInfo from '../components/borrowLoanInfo'


const routers = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: indexMain
    }
    , {
        path: '/usercenter',
        name: 'usercenter',
        component: userCenter
    }, {
        path: '/creditRating',
        name: 'creditRating',
        component: creditRating
    }, {
        path: '/borrowLoanInfo',
        name: 'borrowLoanInfo',
        component:borrowLoanInfo
    }
];


export default routers;

