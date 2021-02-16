# RSS Blog
このブログは以下のブログ・スターターをForkしてカスタマイズしたものです。
[チーム個々人のテックブログをRSSで集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

ブログのRSSのURLを登録することで、様々な投稿を一覧にまとめて表示します。
Zenn、Qiita、Medium、note、はてなブログなど、RSSフィードを取得できるサイトであれば投稿情報を取得できます。

## Demo
https://team-blog-hub.vercel.app

## Development
```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

## Deployment
VercelやNetlifyにデプロイすることを推奨します。`npm run build`（or `yarn build`）を実行することで、RSSからの投稿データの取得とサイトのビルドが行われます。1日に1回などの頻度で自動デプロイするのが良いかもしれません。

## Licence
MIT