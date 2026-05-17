# 残心 / Zanshin Phase 2 Audit
## 監査日
2026-05-17
## 監査対象
- README.md
- docs/concept.md
- docs/design-system.md
- docs/mvp-spec.md
- docs/development-phases.md
- .github/copilot-instructions.md
---
## 1. コンセプト監査
判定: OK
確認内容:
- アプリ名「残心 / Zanshin」と一言コンセプトが README / concept に明記されていることを確認
- 単なる和風メモ帳ではなく、書く体験の余韻を扱うアプリとして整理されていることを確認
- 「残心」「間」「余白」と、機能追加より静かな体験を優先する方針を確認
修正した内容:
- README.md に「書く体験の余韻」を明示し、海外向け補助表現を整理
- docs/concept.md に一言コンセプトと体験設計としての説明を追記
---
## 2. デザイン監査
判定: OK
確認内容:
- 過剰な和風装飾を避け、静かな現代和として成立させる方針を確認
- 黄金比スケール、余白、カード間隔、FABサイズ、行間の数値方針を確認
- カラーパレットと iPhone-first の余白・タップ領域・safe-area 方針を確認
修正した内容:
- docs/design-system.md にカード間隔、safe-area、44pxタップ領域、キーボード配慮を追記
- docs/design-system.md に和紙・墨・金箔の扱いとモチーフ使用ルールを追記
---
## 3. MVP範囲監査
判定: OK
確認内容:
- MVP必須機能と、MVPでまだ作らないものが明確に分離されていることを確認
- データ構造が単純で、localStorage開始から IndexedDB へ移行しやすい方針を確認
- Webアプリとして始めつつ、将来の PWA / Capacitor 化を妨げない構造方針を確認
修正した内容:
- docs/mvp-spec.md に MVP必須機能一覧を明記
- docs/mvp-spec.md でお気に入り機能を必須範囲に整理し、複雑なフィルタを後続へ分離
---
## 4. 開発フェーズ監査
判定: OK
確認内容:
- Phase 1 は設計整理のみ、Phase 2 は監査のみ、Phase 3 で初めてMVP実装する流れを確認
- Phase 3 完了前は Cloudflare Pages にデプロイしないルールを確認
- 将来拡張候補がMVP範囲と混ざらない構成になっていることを確認
修正した内容:
- docs/development-phases.md の各フェーズの役割と禁止事項を明確化
- docs/development-phases.md に Phase 2 の監査対象範囲と Phase 3 の実装ルールを追記
---
## 5. Cloud Agent指示監査
判定: OK
確認内容:
- プロジェクトの目的、多機能化しすぎない方針、余白・静けさ・iPhone-first が明記されていることを確認
- Phase 1 / 2 / 3 の作業範囲と Cloudflare デプロイ禁止ルールを確認
- 実装時の技術方針が簡潔で、MVP外機能を勝手に追加しない前提を確認
修正した内容:
- .github/copilot-instructions.md に Phase 2 の作業範囲制限を追記
- .github/copilot-instructions.md に AI機能・ログイン/同期・課金寄りの逸脱防止を明記
---
## 6. Phase 3 実装前の最終方針
Phase 3では以下を守ること。
- Vite + React + TypeScript + TailwindでMVPを作る
- localStorage保存から開始する
- メモ一覧、作成、編集、削除、自動保存、検索、お気に入りを実装する
- iPhone-firstで設計する
- 余白と行間を大切にする
- 機能を増やしすぎない
- Cloudflare PagesへのデプロイはMVP完成後のみ行う
---
## 7. MVPでまだ作らないもの
- ログイン
- クラウド同期
- AI機能
- 課金
- Markdown完全対応
- 複雑なタグ管理
- 共同編集
- App Store申請
---
## 8. 総合判定
```txt
Phase 3に進んでよい

理由:
Phase 1で用意した設計ファイルは揃っており、Phase 2の監査で見つかった曖昧さも README / docs の範囲で解消できたため。残心らしさ、MVP範囲、iPhone-first 方針、Cloudflare非デプロイルールがそろって明文化されている。
```
