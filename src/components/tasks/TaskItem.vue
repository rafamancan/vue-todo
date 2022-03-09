<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox :input-value="active"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{task.name}}</v-list-item-title>
      </v-list-item-content>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task']
}
</script>
