import {getUserTempId} from '@/utils/userabout'
import {reqUserRegister,reqUserLogin,reqUserLogout} from '@/api'
const state = {
    userTempId:getUserTempId(),
    userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY'))||{}
}
const mutations = {
    RECEIVEUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    RESETUSERINFO(state,userInfo){
        state.userInfo = {}
    }
}
const actions = {
    //注册新用户
    async userRegister({commit},userInfo){
        let result = await reqUserRegister(userInfo)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //登录用户
    async userLogin({commit},userInfo){
        const result = await reqUserLogin(userInfo)
        if(result.code === 200){
            commit('RECEIVEUSERINFO',result.data)
             localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data))
             return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //退出登录
    async userLogout({commit}){
        let result = await reqUserLogout()
        if(result.code === 200){
            commit('RESETUSERINFO')
            localStorage.removeItem('USERINFO_KEY')
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {
    
}
export default ({
    state,
    mutations,
    actions,
    getters
})