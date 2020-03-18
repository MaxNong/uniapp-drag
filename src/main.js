import Vue from 'vue'
import App from './App.vue'
import control from '@/control/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import store from './store/index.js'

Vue.use(ViewUI);

Vue.config.productionTip = false

control();

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
