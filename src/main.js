import Vue from 'vue'
import App from '@/App'


Vue.config.productionTip = false;
import router from '@/router'
 
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

// import {reqCategoryList} from '@/api'
// reqCategoryList()

import store from '@/store'

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store,
})
