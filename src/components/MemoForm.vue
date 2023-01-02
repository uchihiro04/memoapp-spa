<script setup>
import { ref } from "vue";
const STORAGE_KEY = "memosData";
const memos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
const body = ref(undefined);

const addTodo = () => {
  memos.value.push({
    id: self.crypto.randomUUID(),
    body: body.value,
  });
  body.value = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos.value));
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <textarea v-model="body" cols="30" rows="10"></textarea>
    <button type="submit">追加</button>
  </form>
</template>
