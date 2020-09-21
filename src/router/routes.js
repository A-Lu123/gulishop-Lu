const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Search = () => import('@/pages/Search')
const Register = () => import('@/pages/Register')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const MyOrder = () => import('@/pages/Center/MyOrder')
const GroupOrder = () => import('@/pages/Center/GroupOrder')

// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Search from '@/pages/Search'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// import MyOrder from '@/pages/Center/MyOrder'
// import GroupOrder from '@/pages/Center/GroupOrder'
import store from '@/store'
export default [
    {
        path: '/communication',
        component: () => import('@/pages/Communication/Communication'),
        children: [
          {
            path: 'event',
            component: () => import('@/pages/Communication/EventTest/EventTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'model',
            component: () => import('@/pages/Communication/ModelTest/ModelTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'sync',
            component: () => import('@/pages/Communication/SyncTest/SyncTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'attrs-listeners',
            component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'children-parent',
            component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
            meta: {
              isHideFooter: true
            },
          },
          {
            path: 'scope-slot',
            component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
            meta: {
              isHideFooter: true
            },
          }
        ],
      },
    {
        path:'/center',
        component:Center,
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'',
                redirect:'myorder'
            }
        ]
    },
    {
        path:'/trade',
        component:Trade,
        beforeEnter: (to, from, next) => {
            if(from.path === '/shopcart'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        beforeEnter: (to, from, next) => {
            if(from.path === '/trade'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path:'/paySuccess',
        component:PaySuccess,
        beforeEnter: (to, from, next) => {
            if(from.path === '/pay'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/addCartSuccess',
        component:AddCartSuccess,
        beforeEnter: (to, from, next) => {
            let skuNum = to.query.skuNum
            let skunInfo = sessionStorage.getItem('SKUINFO_KEY')
            if(skunInfo && skunInfo){
                next()
            }else{
                next(false)
            }

        }
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
        },
        beforeEnter: (to, from, next) => {
            if(store.state.user.userInfo.name){
                next('/')
            }else{
                next()
            }
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