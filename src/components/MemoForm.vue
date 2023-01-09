<script setup>
import MemoList from "./MemoList.vue";
import { store } from "../store.js";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const editingMemo = computed(() => store.findMemo(route.params.id));

function submitEditedMemo(event) {
  event.preventDefault();
  if (route.params.id) {
    store.updateMemo(route.params.id);
  } else {
    store.add();
  }
  router.push("/");
}

function submitDeletedMemo(event) {
  event.preventDefault();
  if (route.params.id) {
    store.deleteMemo(route.params.id);
  }
  router.push("/");
}
</script>

<template>
  <div class="memo-container">
    <MemoList />
    <form class="memo-form">
      <textarea
        v-if="editingMemo"
        v-model="editingMemo.body"
        cols="30"
        rows="10"
      ></textarea>
      <textarea v-else v-model="store.body" cols="30" rows="10"> </textarea>
      <div class="memoapp-button">
        <button type="submit" @click="submitEditedMemo">編集</button>
        <button class="delete-button" type="submit" @click="submitDeletedMemo">
          削除
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.memo-container {
  display: flex;
  align-items: flex-start;
  width: 66%;
  justify-content: space-between;
  margin: 0 auto;
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
