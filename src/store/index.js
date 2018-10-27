import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    islogin:false,
  },
  mutations:{
    login(state){
      state.islogin=true;
    },
    logout(state){
      state.islogin=false;
    }
  }
});

export default store;
