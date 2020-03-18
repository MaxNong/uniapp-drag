import Vue from 'vue'
import App from './App'
import control from '@/control/index'
import store from './store/index.js'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false;
Vue.prototype.$store = store;

App.mpType = 'app'

control();

const app = new Vue({
  ...App,
  store
})
app.$mount()
