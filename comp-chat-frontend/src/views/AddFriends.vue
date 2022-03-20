<template>
  <h3>Search for users</h3>


  <InputText v-model="search" placeholder="Enter search" /> <br />
  <br/>
  <Button @click="searchUser">Search</Button> <br />
  <ul>
    <li v-for="(user, index) in userStore.users" v-bind:key="index">
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";

const userStore = UserStore();
const search = ref("");

function searchUser() {
  userStore.findUsers(search.value);
}
</script>

<style scoped></style>
