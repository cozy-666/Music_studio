## vite利用
高速でコンパイルされるため
-- 変更を検知して更新してくれる

## 手順書
node.jsを確認
node -v

https://nodejs.org/ja/

viteを確認
https://ja.vite.dev/guide/

npm create vite@latest

frameworkはReact variantはTypescript
他はnoで

cd 名前
npm install
node_moduleフォルダが作成されます。

npm run dev
http://localhost:5173/

上記リンクで表示

## スタイリングのライブラリ導入
tailwindCSS利用
https://tailwindcss.com/docs/installation/using-vite
npm install tailwindcss @tailwindcss/vite

shadcn利用
ドキュメントを参照してください
https://ui.shadcn.com/docs

npm install -D @types/node

npx shadcn@latest init

## 音楽自動生成利用してみる
下記アカウント作成
https://www.loudly.com/

.env作成し
VITE_LOUDLY_API_KEY=
で獲得したAPIを設定。
※課金設定があるので、外部公開しないように

## api
npm i axios



