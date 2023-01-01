<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <h1>メモ一覧</h1>
  <!-- <ul v-for="memo in memos" :key="memo.id">
    <li>{{ memo.body }}</li>
  </ul> -->

  <RouterLink to="/new">＋</RouterLink>
  <RouterView />
</template>

<style scoped></style>
