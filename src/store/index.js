import Vue from 'vue';
import Vuex from 'vuex';
import settingConsoleInfo from './modules/settingConsoleInfo';

//注册vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settingConsoleInfo
  }
})