import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import ElementUI from 'element-ui';
import routes from './router';
import Utils from './utils';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Router);


const router = new Router({
  routes
});

Vue.prototype.$utils = Utils;

new Vue({
  el: '#app',
  router: router,
  utils: Utils,
  store,
  render: h => h(App)
});
