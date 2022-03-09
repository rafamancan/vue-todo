<template>
  <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <v-col
          cols="12"
        >
          <v-text-field
            label="Qual é a sua tarefa?"
            outlined
            dense
            clearable
            v-model="newTask"
            @keyup.enter="handleAddTask"
          ></v-text-field>
        </v-col>
        <div
          v-for="task in $store.state.tasks"
          :key="task.id"
        >
          <TaskItem
            :task="task"
          />
        </div>
      </v-list-item-group>
    </v-list></template>

<script>
import TaskItem from '../components/tasks/TaskItem.vue'

export default {
  name: 'TasksView',
  components: {
    TaskItem
  },
  data () {
    return {
      newTask: null
    }
  },
  methods: {
    handleAddTask () {
      this.$store.commit('addTask', this.newTask)
      this.newTask = null
    }
  }
}
</script>
