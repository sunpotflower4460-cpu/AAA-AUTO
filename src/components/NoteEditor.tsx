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
}: NoteEditorProps) => {
  const isSaving = saveState === 'saving'
  const isSaved = saveState === 'saved'

  return (
    <section className="animate-scale-in flex min-h-[calc(100svh-42px)] flex-col px-[21px] pb-[34px] pt-[21px] sm:px-[34px] sm:pt-[34px]">
      {/* top bar */}
      <header className="flex items-center justify-between gap-[8px]">
        <button
          type="button"
          aria-label={copy.back}
          onClick={onBack}
          className="flex min-h-10 items-center gap-[6px] rounded-[8px] px-[10px] text-[14px] text-[var(--color-ink-muted)] transition-all duration-200 hover:text-[var(--color-sumi)]"
        >
          <span aria-hidden="true" className="text-[16px]">←</span>
          <span className="hidden sm:inline">{copy.back}</span>
        </button>

        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            aria-label={copy.favorite}
            onClick={onToggleFavorite}
            className={`flex min-h-10 min-w-10 items-center justify-center rounded-[8px] text-[19px] transition-all duration-200 hover:scale-110 active:scale-95 ${
              note.isFavorite ? 'text-[var(--color-gold)]' : 'text-[var(--color-ink-muted)] opacity-50 hover:opacity-80'
            }`}
          >
            {note.isFavorite ? '★' : '☆'}
          </button>
          <button
            type="button"
            aria-label={copy.delete}
            onClick={onDelete}
            className="min-h-10 rounded-[8px] px-[12px] text-[13px] text-[var(--color-vermilion)] opacity-60 transition-all duration-200 hover:opacity-100"
          >
            {copy.delete}
          </button>
        </div>
      </header>

      {/* save status — floats quietly below the header */}
      <p
        aria-live="polite"
        className={`mt-[8px] min-h-[18px] text-[12px] tracking-[0.04em] text-[var(--color-ink-muted)] transition-opacity duration-500 ${
          saveState === 'idle' ? 'opacity-0' : 'opacity-100'
        } ${isSaving ? 'saving-pulse' : ''}`}
      >
        {isSaving ? '…' : isSaved ? `${copy.saved}` : ''}
      </p>

      {/* title */}
      <label className="mt-[21px] block">
        <span className="sr-only">{copy.titlePlaceholder}</span>
        <input
          aria-label={copy.titlePlaceholder}
          type="text"
          value={note.title}
          onChange={(event) => onChangeTitle(event.target.value)}
          placeholder={copy.titlePlaceholder}
          className="title-font w-full border-0 bg-transparent px-0 text-[24px] leading-tight tracking-[0.02em] outline-none placeholder:text-[var(--color-ink-muted)] placeholder:opacity-40 sm:text-[27px]"
        />
      </label>

      {/* divider between title and body */}
      <div className="mt-[16px] h-px bg-gradient-to-r from-[var(--color-indigo)]/15 via-[var(--color-indigo)]/8 to-transparent" />

      {/* body */}
      <label className="mt-[16px] flex-1">
        <span className="sr-only">{copy.bodyPlaceholder}</span>
        <textarea
          aria-label={copy.bodyPlaceholder}
          value={note.body}
          onChange={(event) => onChangeBody(event.target.value)}
          placeholder={copy.bodyPlaceholder}
          className="body-font min-h-[60svh] w-full resize-none border-0 bg-transparent p-0 text-[16px] leading-[1.9] tracking-[0.01em] text-[var(--color-sumi)] outline-none placeholder:text-[var(--color-ink-muted)] placeholder:opacity-35 sm:text-[17px]"
        />
      </label>
    </section>
  )
}
