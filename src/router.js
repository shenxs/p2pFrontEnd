import MainIndex from './components/pages/MainIndex';
import MainUser from './components/pages/MainUser';
import MainAdmin from './components/pages/MainAdmin';
import Login from './components/common/Login';
import Register from './components/common/Register';
import MainBuy from './components/pages/MainBuy';
import MainSell from './components/pages/MainSell';
import Detail from './components/common/BasicDetailView';

const routers = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'main-index',
    component: MainIndex
  },
  {
    path: '/user',
    name: 'main-user',
    component: MainUser
  },
  {
    path: '/admin',
    name: 'main-admin',
    component: MainAdmin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/buy',
    name: 'buy',
    component: MainBuy
  }, {
    path: '/sell',
    name: 'sell',
    component: MainSell
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }

];

export default routers;

