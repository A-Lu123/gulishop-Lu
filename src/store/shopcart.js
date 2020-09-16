import {reqAddOrUpdateShopCart,reqShopCartList,reqUpdateCartIsChecked,reqDeleteCart} from '@/api'
const state = {
    shopCartList:[]
}
const mutations = {
    RECEIVESHOPCARTLIST (state,shopCartList){
        state.shopCartList = shopCartList
    }

}
const actions = {
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code === 200){
            return 'success'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    
    //购物车 详细信息
    async getShopCartList({commit}){
        let result = await reqShopCartList()
        if(result.code === 200){
            commit('RECEIVESHOPCARTLIST',result.data)
        }
    },
    //修改购物车选中状态
    async updateCartIsChecked({commit},{skuId,isChecked}){
        let result = await reqUpdateCartIsChecked(skuId,isChecked)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    updateAllCartIsChecked({state,dispatch},isChecked){
        let promises = []
        state.shopCartList.forEach(item => {
            if(item.isChecked === isChecked) return 
            let promise = dispatch('updateCartIsChecked',{skuId:item.skuId,isChecked:isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
            
    } ,

    //点击删除
    async deleteCart({commit},skuId){
        let result = await reqDeleteCart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    deleteAllCart({state,dispatch}){
        let promises = []
        state.shopCartList.forEach(item=>{
            if(!item.isChecked) return
            const promise = dispatch('deleteCart',item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
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