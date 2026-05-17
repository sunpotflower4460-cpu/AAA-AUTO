# 残心 / Zanshin

書いたあとにも、心がそこに残るメモ帳。  
A calm, Japanese-inspired, iPhone-first note app.

## セットアップ

```bash
npm install
```

## 開発起動

```bash
npm run dev
```

## build

```bash
npm run build
```

## lint

```bash
npm run lint
```

## MVP機能

- メモ一覧
- メモ作成
- メモ編集
- メモ削除（確認ダイアログあり）
- 自動保存
- 検索（タイトル・本文）
- お気に入り
- localStorage永続化
- ページ更新後の復元
- 検索結果0件の空状態表示
- iPhone向けレスポンシブUI
- PC中央カラム表示
- 日本語/英語を意識した文言

## Cloudflare Pages設定

```txt
Build command: npm run build
Build output directory: dist
```

手動接続手順:

1. Cloudflare Pagesで本リポジトリを接続
2. Framework presetは「Vite」または「None」
3. Build commandに `npm run build` を設定
4. Build output directoryに `dist` を設定
5. 環境変数はMVPでは不要
6. build成功を確認後にデプロイ

## Phase 4

Phase 4 最終調整（デバッグ・UI/UX微調整・build確認・Cloudflare Pages準備）を反映済みです。
