<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/user.store";
const userStore = UserStore();
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue);
</script>

<template>
  <nav>
    | <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/createuser"> Create a user</RouterLink> |
    <span v-if="userStore.userName.length > 0">
      <RouterLink to="/chat"> join Chat</RouterLink> |
      <router-link to="/createroom"> Create a chat room</router-link> | logged
      in as: {{ userStore.userName }}
    </span>
  </nav>
  <br />
  <RouterView />
</template>

<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>