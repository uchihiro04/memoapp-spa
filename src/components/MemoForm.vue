<script setup>
import { ref } from "vue";
const STORAGE_KEY = "memosData";
const memos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
const body = ref(undefined);

const addTodo = () => {
  if (!body.value) {
    return;
  }
  memos.value.push({
    id: self.crypto.randomUUID(),
    firstLine: body.value.trim().split(/\n/)[0],
    body: body.value,
  });
  body.value = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos.value));
};
</script>

<template>
  <div class="form-container">
    <form class="memo-form">
      <textarea v-model="body" cols="30" rows="10"></textarea>
      <button type="submit" @click="addTodo">保存</button>
    </form>
  </div>
</template>
