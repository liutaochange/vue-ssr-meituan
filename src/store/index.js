import Vue from 'vue'
import Vuex from 'vuex'
import count from './module/count'
import text from './module/text'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    count,
    text
  }
})
export default store