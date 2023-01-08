<script setup>
import { store } from "../store.js";
</script>

<template>
  <h1>メモ一覧</h1>
  <ul v-for="memo in store.memos" :key="memo.id">
    <li>
      <RouterLink :to="`/memos/${memo.id}`">{{ memo.firstLine }}</RouterLink>
    </li>
  </ul>
  <router-link to="/memos/new">＋</router-link>
</template>
