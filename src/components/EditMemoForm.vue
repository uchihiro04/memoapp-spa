<script setup>
import MemoList from "./MemoList.vue";
import { computed } from "vue";
import { store } from "../store.js";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const editingMemo = computed(() => store.findMemo(route.params.id));

function submitEditedMemo(event) {
  event.preventDefault();
  store.updateMemo(route.params.id);
  router.push("/");
}

function submitDeletedMemo(event) {
  event.preventDefault();
  store.deleteMemo(route.params.id);
  router.push("/");
}
</script>

<template>
  <MemoList />
  <form class="memo-form">
    <!--メモ削除時にeditingMemoがundefinedになることによってエラーが発生するため、v-ifを追加 -->
    <textarea
      v-if="editingMemo"
      v-model="editingMemo.body"
      cols="30"
      rows="10"
    ></textarea>
    <button type="submit" @click="submitEditedMemo">編集</button>
    <button type="submit" @click="submitDeletedMemo">削除</button>
  </form>
</template>
