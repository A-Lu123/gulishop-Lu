import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'


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
        return originPush.replace.call(this,location).catch(()=>{})
    }else{
        return originPush.replace.call(this,onResolved,onRejected)
    }
}

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHide:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search',
            // props:true
            // props:{name:'李云龙'}
            props(route){
                return {keyword:route.params.keyword,keyword2:route.query.keyword2}
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]

})