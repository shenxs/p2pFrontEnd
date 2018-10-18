import Vue from 'vue';
import Router from 'vue-router';

import routes from './router';

import App from './App.vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Router);

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
