<template>
  <h2>Here you can create a room</h2>
  <input v-model="inputName" placeholder="Enter room name" />
  <button @click="handleCreateRoom">Create</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RoomService } from "@/services/room.service";

const inputName = ref("");
const roomService = new RoomService();

function handleCreateRoom() {
  roomService.createRoom(inputName.value);
}
</script>

<style scoped></style>
