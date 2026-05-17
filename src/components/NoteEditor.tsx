import { copy } from '../lib/i18n'
import type { Note } from '../types/note'

type NoteEditorProps = {
  note: Note
  saveState: 'idle' | 'saving' | 'saved'
  onBack: () => void
  onDelete: () => void
  onToggleFavorite: () => void
  onChangeTitle: (value: string) => void
  onChangeBody: (value: string) => void
}

export const NoteEditor = ({
  note,
  saveState,
  onBack,
  onDelete,
  onToggleFavorite,
  onChangeTitle,
  onChangeBody,
}: NoteEditorProps) => (
  <section className="flex min-h-[calc(100svh-42px)] flex-col px-[21px] pb-[34px] pt-[34px]">
    <header className="flex items-center justify-between gap-[13px]">
      <button
        type="button"
        aria-label={copy.back}
        onClick={onBack}
        className="min-h-11 rounded-[8px] border border-[var(--color-line)] px-[13px] text-[14px] transition hover:border-[var(--color-indigo)]"
      >
        ← {copy.back}
      </button>
      <div className="flex items-center gap-[8px]">
        <button
          type="button"
          aria-label={copy.favorite}
          onClick={onToggleFavorite}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-[8px] border border-[var(--color-line)] px-[13px] text-[var(--color-gold)]"
        >
          {note.isFavorite ? '●' : '○'}
        </button>
        <button
          type="button"
          aria-label={copy.delete}
          onClick={onDelete}
          className="min-h-11 rounded-[8px] border border-[var(--color-vermilion)]/50 px-[13px] text-[14px] text-[var(--color-vermilion)]"
        >
          {copy.delete}
        </button>
      </div>
    </header>

    <p className="mt-[13px] text-[13px] text-[var(--color-ink-muted)] transition-opacity duration-[300ms]">
      {saveState === 'saving' ? '保存中…' : `${copy.saved} / ${copy.savedEn}`}
    </p>

    <label className="mt-[21px] block">
      <span className="sr-only">{copy.titlePlaceholder}</span>
      <input
        aria-label={copy.titlePlaceholder}
        type="text"
        value={note.title}
        onChange={(event) => onChangeTitle(event.target.value)}
        placeholder={copy.titlePlaceholder}
        className="title-font h-11 w-full border-0 border-b border-[var(--color-line)] bg-transparent px-[4px] text-[21px] outline-none"
      />
    </label>

    <label className="mt-[21px] flex-1">
      <span className="sr-only">{copy.bodyPlaceholder}</span>
      <textarea
        aria-label={copy.bodyPlaceholder}
        value={note.body}
        onChange={(event) => onChangeBody(event.target.value)}
        placeholder={copy.bodyPlaceholder}
        className="body-font min-h-[55svh] w-full resize-none rounded-[8px] border border-[var(--color-line)] bg-white/70 p-[21px] text-[16px] leading-[1.618] outline-none transition focus:border-[var(--color-indigo)]"
      />
    </label>
  </section>
)
