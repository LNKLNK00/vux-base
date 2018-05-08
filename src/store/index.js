import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  getters
})

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  actions: {
    UpdateLoadingStatus ({commit}, isLoading) {
      store.commit('updateLoadingStatus', {isLoading: isLoading})
    }
  }
})

export default store
