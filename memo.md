index.cssは全体で適用されるcss
main.tsxが全ての起点になっている。

Components
UIを構築するための基本的な構成要素（再利用可能）
ex. セレクトボタン　検索フォーム

React Router
Reactでは1つのHTMLファイルしか使わない。
index.html一つにjavascriptで画面切り替えしている：SPA
-- どのページでもURLが同じ
--- ブックマークできない、友達共有が不便、ブラウザバックが正常に動かない

解決するのがReact Router