import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
    img:''
  },
 

  mutations: {
    Setİmage(state, image) {
      state.img = image
      document.body.style.backgroundImage =`url(${image})`
      localStorage.setItem('arkaplan1',state.img)
    },
  },
 
  actions: {
    uptededİmage({commit}, image) {
      commit('Setİmage', image )
      
    },
  },
  modules: {}
})