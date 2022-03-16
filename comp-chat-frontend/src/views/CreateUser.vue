<template>
  <div style="text-align: center;">
  <h2>Create a new user</h2>
  <InputText v-model="inputName" style="margin-bottom: 10px" placeholder="Enter name" /> <br />
  <InputText v-model="inputEmail" style="margin-bottom: 10px" placeholder="Enter email" /> <br />
  <InputText v-model=" inputPassword" style="margin-bottom: 10px"  placeholder="Enter password" /> <br />
  <button @click="handleCreateUser">Create</button>
</div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";
const userStore = UserStore();
const inputName = ref("");
const inputEmail = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputName.value, inputEmail.value, inputPassword.value);
}
</script>

<style scoped></style>
