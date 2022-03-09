<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Editar
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text
          class="mt-2"
          >Informe o novo nome para tarefa.</v-card-text>

          <v-text-field
            class="px-3"
            label="Nome da tarefa"
            placelholder="Nome da tarefa"
            outlined
            v-model="title"
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="$emit('closeModal')"
            >
              Cancelar
            </v-btn>
            <v-btn
             color="primary"
              text
              @click="handleEditar()"
            >
              Editar
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      dialog: true,
      title: null
    }
  },
  created() {
    this.title = this.task.title
  },
  methods: {
    handleEditar() {
      const newTask = {
        title: this.title,
        id: this.task.id
      }
      this.$store.dispatch('editTask', newTask)
      this.$emit('closeModal')
    }
  }
}
</script>

<style>

</style>
