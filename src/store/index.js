import {createStore} from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        usename:"Messi",
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  export default store
  