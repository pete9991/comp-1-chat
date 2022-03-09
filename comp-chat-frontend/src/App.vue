<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/user.store";
const userStore = UserStore();
</script>

<template>
  <nav>
    | <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/createuser"> Create a user</RouterLink> |
    <RouterLink to="/chat"> join Chat</RouterLink> |
    <span v-if="userStore.userName.length > 0"
      >logged in as: {{ userStore.userName }}</span
    >
  </nav>
  <br />
  <RouterView />
</template>
