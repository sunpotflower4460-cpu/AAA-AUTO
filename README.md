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

## ビルド

```bash
npm run build
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
- iPhone向けレスポンシブUI
- 日本語/英語を意識した文言

## Cloudflare Pages方針

Phase 3の途中ではデプロイしません。  
MVP完成後に `npm run build` 成功を確認してから準備します。

- Build command: `npm run build`
- Build output directory: `dist`
