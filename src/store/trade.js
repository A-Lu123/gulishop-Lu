
import {reqTradeInfo} from '@/api'
let state = {
    tradeInfo:{}
}
let mutations = {
    RECEIVETRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}
let actions = {
    async getTradeInfo({commit}){
        let result = await reqTradeInfo()
        if(result.code === 200){
            commit('RECEIVETRADEINFO',result.data)
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
let getters = {
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    },
    userAddressList(state){
        return state.tradeInfo.userAddressList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}