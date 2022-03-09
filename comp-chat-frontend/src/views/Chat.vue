<template>
  <h2>send chat</h2>
  <input v-model="txtChatInput" placeholder="Enter message" />
  <br />
  <input v-model="roomChatInput" placeholder="Enter room name" />
  <br />
  <button @click="sendChat">Send!</button>
  <h2>All Chats</h2>
  <input v-model="roomListener" placeholder="enter room name" /> <br />
  <button @click="listenToRoom">connect</button>
  <ul>
    <li v-for="(chat, index) in chatStore.chats" v-bind:key="index">
      {{ chat.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chat.store";
import { ref } from "vue";

const chatStore = ChatStore();
const txtChatInput = ref("");
const roomChatInput = ref("");
const roomListener = ref("");

function listenToRoom() {
  chatStore.setRoom(roomListener.value);
}

function sendChat() {
  chatStore.createChat({ text: txtChatInput.value, room: roomChatInput.value });
}
</script>

<style scoped></style>
