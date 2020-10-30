import Vue from 'vue'
import App from './App.vue'

import ZetaUI from '../packages'
Vue.use(ZetaUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
