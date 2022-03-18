<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { UserStore } from "@/stores/user.store";
const userStore = UserStore();
import {createApp} from 'vue';
import App from './App.vue';
const app = createApp(App);


function  goHome() {
  window.location.href ="/"
}
function  goCreateUser() {
  window.location.href= "/createuser"
}
function goToRoom() {
  window.location.href= "/createroom"
}
function goToChat() {
  window.location.href="/chat"
}


</script>
<template>
  <div>
    <Toolbar>
      <template #start>
        <Button  @click="goHome" label ="Home" icon="pi pi-home" class="mr-2" style="margin-right:15px;" />
        <Button @click ="goCreateUser" label="Create User" icon="pi pi-id-card" class="p-button-success" style="margin-right:15px;" />
        <span v-if="userStore.userName.length > 0">
           <Button @click= "goToChat" label="Chat" icon="pi pi-comment" :model="items" class="p-button-warning" style="margin-right:15px;"/>
          <Button @click="goToRoom" label="Create a chat room" icon="pi pi-plus" class="mr2"/>
        </span>

      </template>

      <template #end>
        <Button icon="pi pi-search" class="mr-2" style="margin-right:15px;" />
        <Button icon="pi pi-times" class="p-button-danger" />
      </template>
    </Toolbar>
  </div>
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
