<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/user.store";
const userStore = UserStore();
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
