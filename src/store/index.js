import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import search from './search'
import user from './user'
import detail from './detail'
import shopcart from './shopcart'
import trade from './trade'
const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search,
        user,
        detail,
        shopcart,
        trade
    }
})

