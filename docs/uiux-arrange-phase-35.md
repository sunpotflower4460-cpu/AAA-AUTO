# Phase 5 Arrange Report

## 目的

MVPのUI/UXを、残心らしい静けさ・余白・現代和の方向へ磨き込み、体験を独自に最大化する。  
装飾を増やすのではなく「削ぎ落として整える」方向で、すべての画面を再検討した。

---

## 改善した内容

- **和紙テクスチャの追加**  
  `body` と AppShell 内カードに SVG fractalNoise ベースのグレインオーバーレイを追加。  
  opacity を極めて低く（0.025〜0.028）設定し、見えそうで見えない紙目感を実現。

- **ヘッダーの再設計**  
  「残心」を 38–44px・font-weight light・tracking wider で大きく静かに掲示。  
  「Zanshin Notes」を 11px・大文字 tracking で極小に添える（存在感を消す）。  
  タグラインを italic・muted に変更し、詩的な余韻を強調。  
  ヘッダー下に 55px グラデーション細線をセパレーターとして配置。

- **メモカードの洗練**  
  左アクセントを単色 1px から 3px グラデーション（上下 transparent・中央 indigo/30）の  
  「刷毛目」風ストロークに変更。  
  お気に入りアイコンを `●/○` から `★/☆` に変更（金のスター）。  
  カードは hover 時に border を indigo/20 に変化、shadow がわずかに深まる（lift なし）。  
  アニメーション stagger：1枚目 0ms → 以降 45ms ずつ遅延して自然な流れ込みを演出。

- **エディタ画面の再設計**  
  textarea のボーダーとボックスを完全撤廃。白紙に書いている感覚を実現。  
  タイトルとボディの間に薄いグラデーション区切り線のみ配置。  
  戻るボタンをボーダーレスの軽いテキストボタンに変更（← だけでも意味が通る）。  
  お気に入り・削除ボタンもボーダーを外し opacity を使ったミニマル表現に。  
  保存表示：`保存中…` は dots のみ＋pulse アニメーション、  
  `保存しました` は短く静かに表示して 1.2s でフェードアウト。  
  本文の line-height を 1.9 に拡大し、書く体験を豊かに。

- **空状態の改善**  
  同心円エンソ 2重（160px + 110px）で zen な余白感を演出。  
  タイトルを serif フォントに変更し、詩的な言葉が際立つように。  
  ボタン hover 時に indigo 薄色がつく静かなアクション表現。

- **検索バー**  
  背景を `white` → `washi/50` に変更し、リストに溶け込む質感。  
  フォーカス時に paper 色へ明るく変化し、focus 状態が分かりやすく。  
  placeholder 文字を opacity 50 に落として主張を消す。

- **ZanshinMark**  
  エンソの border を 1.5px に、tracking を 0.12em に広げ、より静かな佇まいに。

- **アニメーション追加**  
  `fadeSlideUp`（リスト画面・カード・空状態）と  
  `scaleFadeIn`（エディタ画面）を CSS keyframes で定義。  
  `saving-pulse`（保存中 dots 用）も追加。  
  すべて cubic-bezier(0.22, 1, 0.36, 1) のイージングで「やわらかい重力」を表現。

- **AppShell 改善**  
  カードの corner radius を 13px → 16px へ。  
  shadow をより多層的に（8px close + 32px ambient）。  
  デスクトップ padding を py-34 に広げて余白を増加。

- **カラートークン調整**  
  `--color-washi`: #f7f1e5 → #f5efe2（わずかに温かみを増す）  
  `--color-gold`: #c9a646 → #b8943e（落ち着いた純金色に近づける）  
  `--color-shadow` の不透明度を 0.08 → 0.06 に下げ影を軽くした

---

## 変更した主なファイル

- `src/index.css` — カラー変数、グレインテクスチャ、animation keyframes
- `src/components/AppShell.tsx` — グレインオーバーレイ追加、radius/shadow 改善
- `src/components/NotesList.tsx` — ヘッダー再設計、FAB 改善、スペーシング調整
- `src/components/NoteCard.tsx` — 左アクセント、star アイコン、stagger アニメーション
- `src/components/NoteEditor.tsx` — フルオープンテキストエリア、ヘッダー再設計
- `src/components/EmptyState.tsx` — 同心円エンソ、serif タイトル、hover 表現
- `src/components/SearchBar.tsx` — washi 背景、placeholder opacity
- `src/components/ZanshinMark.tsx` — tracking・opacity 調整

---

## デザイン判断

**「削る美学」を徹底した。**  
Phase 4 のMVPは機能的に正確だったが、ボーダー・背景色・シャドウが「情報を区切る」ために使われており、視覚的なノイズが多かった。

Phase 5 では：
- ボーダーをグラデーションライン1本に置き換える
- 背景を透明にする（テキストエリア）
- ボタンからボーダーを外し opacity で存在感を調整する

という「減算」の方向で整えた。

**左アクセントライン（刀の刃）**について：  
単色 1px ではなく、上下が消えていく 3px グラデーションにすることで  
「線が浮かんでいる」感覚が生まれ、和の墨筆に近い印象になる。

**アニメーション**について：  
「すばやく消える / ゆっくり現れる」という非対称性が和の美に近い。  
入場は 0.38–0.45s、退場（opacity fade）は 0.5s duration で設計した。

---

## 守ったこと

- 複雑にしすぎない
- 余白を守る（golden ratio spacing: 8/13/21/34/55 を維持）
- 侘び寂びを意識する（不完全・余白・消えかけ）
- iPhone-first（safe-area 対応、min-h-10/11 タップ領域確保）
- 機能・データ構造を変更しない
- ログイン・同期・AI 機能を追加しない

---

## 自己評価

### 第一印象
**OK**  
「残心」が大きく静かに出迎える。和紙テクスチャと washi 背景で、開いた瞬間に「紙の空間」を感じる。Japanese minimalism / Zen aesthetic として海外ユーザーにも伝わる質感。

### 書く体験
**OK**  
エディタがボーダーレスの白紙感になり、「書くことに集中できる」感覚が高まった。  
line-height 1.9 でゆったりとした行間。タイトルは serif で大きく、本文は sans-serif で読みやすく分かれている。

### 読み返す体験
**OK**  
カードの stagger animation で自然に一覧が現れる。  
★ アイコンで favorite が視覚的に分かりやすくなった。  
本文プレビューの line-clamp-2 + min-h で高さが安定し、スキャンしやすい。

### 操作性
**OK**  
FAB（＋）は 55px・hover scale・deep shadow で押しやすく目立つ。  
戻るボタンは ← だけでも意図が伝わる。  
削除ボタンは vermilion だが opacity 60 で「あるが主張しない」バランス。

### 残心らしさ
**OK**  
このUIは「ただのメモ帳」ではなく「残心」と呼べる。  
静けさ・余韻・不完全な美（disappearing lines、muted opacity）が随所に宿っている。  
「書いたあとにも、心がそこに残る」という体験の気配が、UIの質感に反映されている。

---

## 残っている課題

- **フォント読み込み保証**: Noto Serif JP / Noto Sans JP を Google Fonts 等で読み込む設定がなく、  
  端末によっては serif/sans fallback になる。Phase 6 で web font 読み込みを検討。
- **ダークモード**: 現在は light モードのみ。washi ダークパレットの検討は Phase 6 以降。
- **カード削除アニメーション**: 現在は即時消去。フェードアウトしてから削除する体験が望ましい。
- **検索時のハイライト**: 検索クエリが本文内でどこにマッチしたか視覚的に示せると読み返し体験が向上する。

---

## Phase 6 に進んでよいか

**進行可能**  
`npm run build` 成功・lint クリア・全機能動作確認済み。  
UI は Phase 4 より明確に美しく整い、残心らしさが増している。
