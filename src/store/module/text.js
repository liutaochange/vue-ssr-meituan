const store = {
  namespaced: true,
  state: {
    text: 'hello'
  },
  mutations: {
    reserve (state) {
      state.text = state.text.split("").reverse().join("")
    }
  },
  actions: {
    reserve ({ commit }) {
      commit('reserve')
    }
  }
}
export default store