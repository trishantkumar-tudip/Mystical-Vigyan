import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/style-starter.css'

import HeaderFooter from './layouts/HeaderFooter.vue';

Vue.component("default-layout",HeaderFooter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')