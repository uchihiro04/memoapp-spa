import { reactive } from "vue";
const STORAGE_KEY = "memosData";

export const store = reactive({
  body: "新規メモ",
  memos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  addMemo() {
    if (!this.body.trim()) {
      alert("文字を入力してください");
      return;
    }
    this.memos.push({
      id: self.crypto.randomUUID(),
      firstLine: this.body.trim().split(/\n/)[0],
      body: this.body,
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memos));
    this.body = "新規メモ";
  },

  updateMemo(id) {
    const memo = this.findMemo(id);
    if (!memo.body.trim()) {
      alert("文字を入力してください");
      const preEditingMemos = JSON.parse(localStorage.getItem(STORAGE_KEY));
      memo.body = preEditingMemos.find(
        (preEditingMemo) => preEditingMemo.id == id
      ).body;
      return;
    }
    memo.firstLine = memo.body.trim().split(/\n/)[0];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memos));
  },

  deleteMemo(id) {
    this.memos = this.memos.filter((memo) => memo.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memos));
  },

  findMemo(id) {
    return this.memos.find((memo) => memo.id === id);
  },
});
