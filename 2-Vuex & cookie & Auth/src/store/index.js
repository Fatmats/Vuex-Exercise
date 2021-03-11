import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    fbApıKey: "AIzaSyASbu4CC07CspkKudRoQCsgfUSWzKsQpi4"
  },
  getters: {
    isAuth(state) {
      return state.token != ""
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    clearToken(state) {
      state.token = "";
      Vue.$cookies.remove("token");
    }
  },
  actions: {
    initAuth({commit}, token) {
      localStorage.getItem('token')
      if (token) {
        commit('setToken', token)
        // router.push('/')
      } else {
        // router.push('/auth')
        return false

      }
    },
    async actionLogin(context, payload) {

      return await axios.post(authTypeStatus(payload.isUser) + "AIzaSyBW-S_pEaJFyYyUEz5NJoNZCPAC5XqKa5U", {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
        .then(response => {
          const { idToken } = response.data;
          context.commit('setToken', idToken);
          Vue.$cookies.set("token", idToken,"60s");
          return response;
        })


      function authTypeStatus(isUser) {
        if (isUser) {
          return "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        } else {
          return "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        }
      }

    },
    actionLogout(context) {
      context.commit("clearToken");
      router.push({name: "Auth"});
    }
  },
})