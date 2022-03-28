<template>
  <h3>Search for users</h3>

  <InputText v-model="search" placeholder="Enter search" /> <br />
  <br />
  <Button @click="searchUser">Search</Button> <br />
  <ul>
    <li v-for="(user, index) in userStore.users" v-bind:key="index">
      {{ user.name }}
    </li>
  </ul>
  <br />
  <Button @click="getInfo">get user info</Button>
  <InputText v-model="infoSearch" placeholder="enter username"></InputText>
  <span v-if="userStore.infoName.length > 0">
    <h5>username: {{ userStore.infoName }}</h5>
    <h5>gender: {{ userStore.infoGender }}</h5>
    <h5>age: {{ userStore.infoAge }}</h5>
    <h5>interests:</h5>
    <ul>
      <li
        v-for="(interest, index) in userStore.infoInterests"
        v-bind:key="index"
      >
        {{ interest }}
      </li>
    </ul>
  </span>
  <span v-if="userStore.infoName.length == 0">
    <h5>this user has no info</h5>
  </span>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref } from "vue";

const userStore = UserStore();
const search = ref("");
const infoSearch = ref("");

function searchUser() {
  userStore.findUsers(search.value);
}
function getInfo() {
  userStore.getUserInfo(infoSearch.value);
  console.log(userStore.userInfo);
}
</script>

<style scoped></style>
