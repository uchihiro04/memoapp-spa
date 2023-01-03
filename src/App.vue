<script setup>
import MemoList from "./components/MemoList.vue";
</script>

<template>
  <MemoList />
  <RouterLink to="/new">＋</RouterLink>
  <RouterView />
</template>
<style scoped></style>
