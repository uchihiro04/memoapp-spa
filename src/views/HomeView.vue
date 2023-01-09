<script setup>
import MemoList from "../components/MemoList.vue";
</script>

<template>
  <div class="memoapp-container">
    <MemoList />
  </div>
</template>

<style scoped>
.memoapp-container {
  display: flex;
  justify-content: center;
  width: 68%;
}

.memo-list-container {
  width: 50%;
}
</style>
