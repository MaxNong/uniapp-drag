import Vue from 'vue';
import Vuex from 'vuex';
import componentsInfo from './modules/componentsInfo';

//注册vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    componentsInfo
  }
})