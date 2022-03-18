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
</script>
<template>
  <div>
    <Toolbar>
      <template #start>
        <Button  @click="goHome" label ="Home" icon="pi pi-home" class="mr-2" />
        <Button @click ="goCreateUser" label="Create User" icon="pi pi-id-card" class="p-button-success" />
        <span v-if="userStore.userName.length > 0">
           <Button label="Chat" icon="pi pi-comment" :model="items" class="p-button-warning"/>
          <Button label="Create a chat room" icon="pi pi-plus" class="mr2"/>
        </span>

      </template>

      <template #end>
        <Button icon="pi pi-search" class="mr-2" />
        <Button icon="pi pi-times" class="p-button-danger" />
      </template>
    </Toolbar>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
