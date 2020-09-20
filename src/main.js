import Vue from 'vue'
import App from '@/App'
import '@/mock/mockServer'

// import '@/api'
import * as API from '@/api'


Vue.config.productionTip = false;
import router from '@/router'
 
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)

import SliderLoop from '@/components/SliderLoop'
Vue.component('SliderLoop',SliderLoop)

// import Pagination from '@/components/pagination'
// Vue.component('Pagination',Pagination)

// import {reqCategoryList} from '@/api'
// reqCategoryList()

import store from '@/store'
//element的使用
import {MessageBox,Message,Pagination} from 'element-ui'
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(Pagination)


//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/1.gif'
Vue.use(VueLazyload,{
  loading
})

//验证规则
import '@/utils/validate'

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
})
