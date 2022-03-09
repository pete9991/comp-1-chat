<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";
const userStore = UserStore();
const inputEmail = ref("");
const inputPassword = ref("");

function handleLoginUser() {
  userStore.login(inputEmail.value, inputPassword.value);
}
</script>

<template>
  <main>
    <h1>hello you are home</h1>
    <br />
    <h1>you can log in here</h1>
    <br />
    <input v-model="inputEmail" placeholder="Enter email" />
    <br />
    <input v-model="inputPassword" placeholder="Enter password" />
    <br />
    <button @click="handleLoginUser">Login</button>
  </main>
</template>
