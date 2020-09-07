import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
    baseURL:'/api',
    timeout:20000
})

instance.interceptors.request.use(config=>{
    return config
})

instance.interceptors