<template>
  <div>
    <v-list-item
    :class="{'blue lighten-4':task.done}"
    @click="$store.dispatch('doneTask', task)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
          :class="{'text-decoration-line-through': task.done}"
          >{{task.title}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <TaskMenu
          :task="task"
          />
        </v-list-item-action>

      </template>

    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from './TaskMenu.vue'

export default {
  components: { TaskMenu },
  props: ['task'],
  methods: {
    handleDeleteTask(id) {
      this.$store.commit('deleteTask', id)
    }
  }
}
</script>

<style>

</style>
