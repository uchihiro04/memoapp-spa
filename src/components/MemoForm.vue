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

<style scoped>
.memo-form {
  text-align: center;
}

.memo-form textarea {
  border: solid 1px #aaa;
  border-radius: 4px;
  font-size: 2rem;
  height: 30rem;
  /* vertical-align: middle; */
  width: 30%;
}

button {
  background-color: #00aeef;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
  margin: 2rem auto;
  padding: 0 2rem;
  vertical-align: middle;
}
</style>
