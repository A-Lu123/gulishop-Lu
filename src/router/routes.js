import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
export default [
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