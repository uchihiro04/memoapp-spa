<script setup>
import MemoList from "./MemoList.vue";
import { store } from "../store.js";
import { useRouter } from "vue-router";
const router = useRouter();

function onSubmit(event) {
  event.preventDefault();
  store.add();
  router.push("/");
}
</script>

<template>
  <div class="memo-container">
    <MemoList />
    <form class="memo-form">
      <textarea v-model="store.body" cols="30" rows="10"></textarea>
      <div class="memoapp-button">
        <button type="submit" @click="onSubmit">保存</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.memo-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.memo-form {
  margin-top: 2.3rem;
}

textarea {
  font-size: 2rem;
  height: 50rem;
}

.memoapp-button {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}

button {
  background-color: #00aeef;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  height: 4rem;
  margin: 0 0 0 1rem;
  padding: 0 2rem;
  vertical-align: middle;
}

button:hover {
  opacity: 0.8;
}

.delete-button {
  background-color: #f15b5b;
}
</style>
