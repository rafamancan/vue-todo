<template>
  <v-app id="inspire">

    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-img
    src="./assets/bg.jpg"
    gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
    dark
    class="pt-5 text-center"
    >
      <v-avatar
      size="100"
      >
        <img
          src="https://pixabay.com/get/gc8ee141c4aa4e6f591039fe4861a56a6f6e7a3e59fcd19ee8dcd9dd549baf2a2a51f156f93070db159edae8c844949ce3f3b54421f6c50e156171e7e6c02de60b21b837e8bdc03044d36afb8f1960f3b_640.jpg"
          alt="John"
        >
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      height="185"
      color="#fcb69f"
      dark
      src="./assets/bg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title
        class="mt-16"
        >
          <InputTask
          style="padding: 0 !important; min-width: 100% !important;"
          />

        </v-app-bar-title>
      </center>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTask from './components/InputTask.vue'
export default {
  components: { InputTask },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Sobre', icon: 'mdi-help-box', to: '/about' }
    ]
  })
}
</script>
