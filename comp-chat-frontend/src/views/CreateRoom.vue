<template>
  <h2>Here you can create a room</h2>
  <input v-model="inputName" placeholder="Enter room name" />
  <button @click="handleCreateRoom">Create</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputName = ref("");

function handleCreateRoom() {}
</script>

<style scoped></style>
