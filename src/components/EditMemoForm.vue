<script setup>
import MemoList from "./MemoList.vue";
import { computed } from "vue";
import { store } from "../store.js";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const editingMemo = computed(() => store.findMemo(route.params.id));

function onSubmit(event) {
  event.preventDefault();
  store.updateMemo(route.params.id);
  router.push("/");
}
</script>

<template>
  <MemoList />
  <form class="memo-form">
    <textarea v-model="editingMemo.body" cols="30" rows="10"></textarea>
    <button type="submit" @click="onSubmit">編集</button>
  </form>
</template>
