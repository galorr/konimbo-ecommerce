import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      product
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
