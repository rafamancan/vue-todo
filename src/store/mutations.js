import db from '../services/localbase.js'

export default {
  searchTasks(state) {
    db.collection('tasks').get().then(tasksDB => {
      state.tasks = tasksDB
    })
  },
  addTask(_state, title) {
    db.collection('tasks').add({
      id: new Date().getTime(),
      title,
      done: false
    })
  }
}
