import {reqAddOrUpdateShopCart} from '@/api'
const state = {

}
const mutations = {

}
const actions = {
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code === 200){
            return 'success'
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