import db from '../services/localbase.js'

export default {
  async addTask({ commit }, title) {
    await commit('addTask', title)
    await commit('searchTasks')
  },
  editTask({ commit }, newTask) {
    db.collection('tasks').doc({ id: newTask.id }).update({
      title: newTask.title
    }).then(() => {
      commit('searchTasks')
    })
  },
  doneTask({ commit }, newTask) {
    db.collection('tasks').doc({ id: newTask.id }).update({
      done: !newTask.done
    }).then(() => {
      commit('searchTasks')
    })
  },
  deleteTask({ commit }, id) {
    db.collection('tasks').doc({ id }).delete()
      .then(() => {
        commit('searchTasks')
      })
  }
}
