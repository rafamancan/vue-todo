<template>
  <div>
    <v-col
    cols="12"
    >
      <v-text-field
        v-model="newTask"
        label="Qual sua tarefa?"
        outlined
        clearable
        :error="error"
        :error-messages="error ? 'Por favor, preencha o campo' : false"
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: null,
      error: false
    }
  },
  methods: {
    handleAddTask() {
      if (!this.newTask) {
        this.error = true
        return
      }

      this.$store.dispatch('addTask', this.newTask)
      this.newTask = null
      this.error = false
    }
  }
}
</script>

<style>

</style>
