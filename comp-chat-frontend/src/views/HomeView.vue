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
    <div style="text-align: center;">
      <h1>Welcome to Chat</h1>
    <br />
    <h3>Login For User</h3>
    <InputText v-model="inputEmail" style="margin-bottom: 10px" placeholder="Enter email" /> <br />
    <InputText v-model="inputPassword" style="margin-bottom: 10px" placeholder="Enter password" /> <br />
    <Button @click="handleLoginUser">Login</Button>
    </div>
  </main>
</template>
