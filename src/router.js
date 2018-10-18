import MainIndex from './components/pages/MainIndex';
import MainUser from './components/pages/MainUser';
import MainAdmin from './components/pages/MainAdmin';

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
  }
];

export default routers;

