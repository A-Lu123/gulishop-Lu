import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
export default [
    {
        path:'/trade',
        component:Trade
    },
    {
        path:'/pay',
        component:Pay
    },
    {
        path:'/paySuccess',
        component:PaySuccess
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/addCartSuccess',
        component:AddCartSuccess
    },
    {
        path:'/detail/:goodsId',
        component:Detail
    },
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
        // props(route){
        //     return {keyword:route.params.keyword,keyword2:route.query.keyword2}
        // }
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