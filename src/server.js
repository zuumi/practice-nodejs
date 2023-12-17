// server.js

const express = require('express');
const app = express();
const port = 3000;

// ルートエンドポイント
app.get('/', (req, res) => {
  res.send('求人投稿アプリへようこそ！');
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  // idに基づいて適切な処理を行う
  res.send(`IDが ${id} の求人情報を表示します`);
});

app.listen(port, () => {
  console.log(`アプリがポート ${port} で実行されています`);
});
