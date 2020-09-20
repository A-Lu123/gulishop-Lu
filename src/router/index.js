import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './routes'
import store from '@/store'


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

let  router = new VueRouter({
    model:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }

})
export default router

//全局前置守卫
router.beforeEach((to,from,next)=>{
    let targetPath = to.path
    if(targetPath.indexOf('/pay') === 0 || targetPath.startsWith('/trade') || targetPath.startsWith('/center')){
        if(store.state.user.userInfo.name){
            next()
        }else{
            next('/login?redirect='+targetPath)
        }
    }else{
        next()
    }
})