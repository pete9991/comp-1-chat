<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/user.store";
const userStore = UserStore();
const state = { page_id: 1, user_id: 5 };
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

function logOut() {
  userStore.logOut();
}
</script>
<template>
  <div>
    <Toolbar>
      <template #start>
        <Button
          @click="$router.push('/')"
          label="Home"
          icon="pi pi-home"
          class="mr-2"
          style="margin-right: 15px"
        />
        <Button
          @click="$router.push('createuser')"
          label="Create User"
          icon="pi pi-user-edit"
          class="p-button-success"
          style="margin-right: 15px"
        />
        <span v-if="userStore.userName.length > 0">
          <Button
            @click="$router.push('/chat')"
            label="Chat"
            icon="pi pi-comment"
            :model="items"
            class="p-button-warning"
            style="margin-right: 15px"
          />
          <Button
            @click="$router.push('/createroom')"
            label="Create a chat room"
            icon="pi pi-comments"
            class="mr2"
            style="margin-right: 15px"
          />
          <Button
            @click="$router.push('/addfriends')"
            label="Add friends"
            icon="pi pi-plus"
            class="mr2"
            style="margin-right: 15px"
          />
          <Button
            @click="$router.push('/rooms')"
            label="View rooms"
            icon="pi pi-users"
            class="mr2"
            style="margin-right: 15px"
          />
        </span>
        <span v-if="userStore.userName.length > 0">
          <h4>You are logged in as: {{ userStore.userName }}</h4>
        </span>
      </template>

      <template #end>
        <Button
          @click="logOut"
          label="Log Out"
          icon="pi pi-times"
          class="p-button-danger"
        />
      </template>
    </Toolbar>
  </div>
  <br />
  <RouterView />
</template>

<style>
#app {
  font-family: "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
