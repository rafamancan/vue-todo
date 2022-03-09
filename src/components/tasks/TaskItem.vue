<template>
  <div>
    <v-list-item
      :class="{'light-blue lighten-4':task.completed}"
      @click.stop="handleChangeStatusTask(task.id)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.completed"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through':task.completed}"
          >
            {{task.name}}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon
            @click.stop="handleDeleteTask(task.id)"
          >
            <v-icon color="red darken-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    handleDeleteTask: function (id) {
      this.$store.commit('deleteTask', id)
    },
    handleChangeStatusTask: function (id) {
      this.$store.commit('changeStatusTask', id)
    }
  }
}
</script>
