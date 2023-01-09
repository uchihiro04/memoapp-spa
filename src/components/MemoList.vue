<script setup>
import { store } from "../store.js";
</script>

<template>
  <div class="memo-list-container">
    <h2>メモ一覧</h2>
    <ul>
      <li v-for="memo in store.memos" :key="memo.id">
        <RouterLink :to="`/memos/${memo.id}`">{{ memo.firstLine }}</RouterLink>
      </li>
    </ul>
    <router-link to="/memos/new" class="add-button">＋</router-link>
  </div>
</template>

<style scoped>
h2 {
  color: #708090;
  font-size: 3rem;
  font-weight: bold;
}

.memo-list-container {
  width: 30%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 2rem;
  margin-top: 2rem;
}

li:last-child {
  margin-bottom: 2rem;
}

a {
  color: #000;
  text-decoration: none;
}

.add-button {
  font-size: 2rem;
}
</style>
