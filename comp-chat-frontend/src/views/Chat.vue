<template>

  <h3>Send a Message</h3>
      <InputText v-model="txtChatInput" placeholder="Enter message"/> <br/>
      <br/>
      <InputText v-model="roomChatInput" placeholder="Enter room name"/> <br/>
      <br/>
      <Button @click="sendChat">Send</Button> <br/>
  <br/>
  <br/>
  <br/>
  <h3>All Chats</h3>
      <h2>You are currently in the room: {{chatStore.roomName}}</h2>
      <InputText v-model="roomListener" placeholder="Enter room name"/> <br/>
      <br/>
      <Button @click="ListenToRoom">Connect</Button>
      <br/>
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
