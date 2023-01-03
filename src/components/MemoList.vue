<script setup>
import { ref } from "vue";
const STORAGE_KEY = "memosData";
const memos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
</script>

<template>
  <h1>メモ一覧</h1>
  <ul v-for="memo in memos" :key="memo.id">
    <li>{{ memo.firstLine }}</li>
  </ul>
</template>
