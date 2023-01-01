<script setup>
import { ref } from "vue";
const memos = ref([]);
const body = ref(undefined);

const addTodo = () => {
  memos.value.push({
    id: self.crypto.randomUUID(),
    body: body.value,
  });
  body.value = "";
  console.log(memos.value);
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <textarea v-model="body" cols="30" rows="10"></textarea>
    <button type="submit">追加</button>
    <button>戻る</button>
  </form>
</template>
