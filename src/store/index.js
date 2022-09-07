import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: '',
    tokenType: '',
    chartData: [],
    cartData: {
      carts: []
    }
  },
  getters: {
    chartNum: (state) => (id) => {
      return state.chartData.slice(0, id)
    },
    cartNum: state => {
      let total = 0
      state.cartData.carts.forEach(cart => {
        total += cart.qty
      })
      return total
    }
  },
  mutations: {
    setToken (state, { token, tokenType }) {
      state.token = token
      state.tokenType = tokenType
    },
    setChart (state, { chartData }) {
      state.chartData = chartData
    },
    setCart (state, { cartData }) {
      state.cartData = cartData
    }
  },
  actions: {
    getToken ({ commit, dispatch }, payload) {
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const oauth = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET
      })
      axios.post(process.env.VUE_APP_KKBOX_OAUTH, oauth.toString(), config)
        .then(res => {
          const token = res.data.access_token
          const tokenType = res.data.token_type
          commit('setToken', { token, tokenType })
          dispatch('getChart', payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getChart ({ state, commit }, payload) {
      const config = {
        headers: {
          Authorization: `${state.tokenType} ${state.token}`
        }
      }
      axios.get(`https://api.kkbox.com/v1.1/charts/${payload}/tracks?territory=TW&limit=20`, config)
        .then(res => {
          const chartData = res.data.data
          commit('setChart', { chartData })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart ({ dispatch }, id) {
      const data = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      axios.post(`${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_PATH}/cart`, data)
        .then(res => {
          console.log(res.data)
          dispatch('getCartData')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getCartData ({ commit }) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then(res => {
          console.log(res.data.data)
          const cartData = res.data.data
          commit('setCart', { cartData })
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
