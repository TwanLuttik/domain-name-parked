import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Pulse from '../core/base';
Vue.use(Pulse);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
