<template>
  <div>
    <TaskList />
    <div
    v-if="!$store.state.tasks.length"
    class="mt-16 animate__animated animate__bounceInUp"
    >
      <center>
        <v-icon
        size="100"
        color="primary"
        >
          mdi-check
        </v-icon>

        <div
        class="text-h5 primary--text"
        >
          Nenhuma tarefa
        </div>

      </center>
    </div>
  <AlertMessage />
  </div>
</template>

<script>
import TaskList from '../components/tasks/TaskList.vue'

export default {
  name: 'HomeView',
  components: {
    TaskList
  },
  created() {
    this.$store.commit('searchTasks')
  }
}
</script>
