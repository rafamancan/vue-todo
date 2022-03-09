import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
  },
  mutations: {
    addTask(state, name) {
      if (name) {
        state.tasks.push({
          id: state.tasks.length + 1,
          name,
          completed: false
        })
      }
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    changeStatusTask(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
