import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './routes'


const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location,onResolved,onRejected) {
    if(onResolved === undefined || onRejected === undefined){
        return originPush.call(this,location).catch(()=>{}) 
    }else{
        return originPush.call(this,onResolved,onRejected)
    }
}

const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location,onResolved,onRejected) {
    if(onResolved === undefined || onRejected === undefined){
        return originReplace.call(this,location).catch(()=>{})
    }else{
        return originReplace.call(this,onResolved,onRejected)
    }
}

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }

})