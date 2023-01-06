import { reactive } from "vue";
const STORAGE_KEY = "memosData";

export const store = reactive({
  body: "新規メモ",
  memos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  add() {
    store.memos.push({
      id: self.crypto.randomUUID(),
      firstLine: store.body.trim().split(/\n/)[0],
      body: store.body,
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.memos));
    store.body = "新規メモ";
  },
});
