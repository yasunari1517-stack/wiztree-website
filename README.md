# ウィズツリー公式サイト

静的HTMLサイトです。GitHub + Cloudflare Pagesで公開できます。

## ファイル
- `index.html`：掲載文章、電話・メールリンク、SEOタイトル等
- `styles.css`：色やレイアウト、スマホ表示
- `script.js`：フッター年号の自動更新
- `favicon.svg`：ブラウザタブのアイコン

## 公開の手順
1. GitHubで新規リポジトリ `wiztree-website` を作成。
2. ZIPを解凍し、上の4ファイルとREADME.mdをリポジトリの**最上位**へアップロード。ZIPファイルだけをアップロードしないでください。
3. Cloudflareダッシュボード → Workers & Pages → Create application → Pages → Connect to Git / Import an existing Git repository（表記は画面により異なります）。
4. GitHubの `wiztree-website` を選択。Framework preset は `None`、Production branch は `main`、Build command は `exit 0`、Build output directory は `.` に設定。
5. デプロイ後の `*.pages.dev` で公開を確認。

## 更新
GitHub上で`index.html`を編集し、変更をコミットするとCloudflare Pages側に自動反映されます。

## 公開前に確認
- 電話番号：080-5538-4696
- メール：yasunari1517@gmail.com
- 損害保険加入・即日対応相談可の表現が現状に合っているか
- 独自ドメインや住所・施工写真・会社概要等は未設定です
- メールボタンはメールアプリを開くリンクです。サイト上の送信フォームではありません。
