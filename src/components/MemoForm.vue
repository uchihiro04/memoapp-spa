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
  <MemoList />
  <form class="memo-form">
    <textarea v-model="store.body" cols="30" rows="10"></textarea>
    <button type="submit" @click="onSubmit">保存</button>
  </form>
</template>
