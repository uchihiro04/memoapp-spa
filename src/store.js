import { reactive } from "vue";
const STORAGE_KEY = "memosData";

export const store = reactive({
  body: "新規メモ",
  memos: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  add() {
    if (!this.body.trim()) {
      alert("未入力の状態ではメモを保存できません");
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
    memo.firstLine = memo.body.trim().split(/\n/)[0];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memos));
  },

  findMemo(id) {
    return this.memos.find((memo) => memo.id === id);
  },
});
