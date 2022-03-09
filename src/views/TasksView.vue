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
          v-for="task in tasks"
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
      newTask: null,
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          completed: false
        },
        {
          id: 2,
          name: 'Task 2',
          completed: false
        },
        {
          id: 3,
          name: 'Task Completed',
          completed: true
        }
      ]
    }
  },
  methods: {
    handleAddTask () {
      if (this.newTask) {
        this.tasks.push({
          id: this.tasks.length + 1,
          name: this.newTask,
          completed: false
        })
        this.newTask = null
      }
    }
  }
}
</script>
