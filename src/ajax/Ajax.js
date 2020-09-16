import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const instance = axios.create({
    baseURL:'/api',
    timeout:20000
})

instance.interceptors.request.use(config=>{
    NProgress.start()
    let userTempId = store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }

    let token = store.state.user.userInfo.token
    if(token){
        config.headers.token = token
    } 
    return config;
})
instance.interceptors.response.use(response=>{
    NProgress.done()
    return response.data
},error=>{
    NProgress.done()
    alert('请求失败'+error.message || '未知错误')
    return new Promise(()=>{})
})

export default instance