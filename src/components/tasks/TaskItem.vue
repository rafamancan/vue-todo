<template>
  <v-list-item
    :class="{'light-blue lighten-4':mutableTask.completed}"
    @click="mutableTask.completed = !mutableTask.completed"
  >
    <template v-slot:default="{}">
      <v-list-item-action>
        <v-checkbox :input-value="mutableTask.completed"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title
          :class="{'text-decoration-line-through':mutableTask.completed}"
        >
          {{mutableTask.name}}
        </v-list-item-title>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task'],
  data: function () {
    return {
      mutableTask: Object.assign({}, this.task)
    }
  }
}
</script>
