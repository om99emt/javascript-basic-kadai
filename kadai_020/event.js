// textのidのHTML要素を取得し定数に代入
const text = document.getElementById('text');
// btnのidのHTML要素を取得し定数に代入
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  text.textContent = "ボタンをクリックしました";
});