import { formatUpdatedAt } from '../lib/date'
import { copy } from '../lib/i18n'
import type { Note } from '../types/note'

type NoteCardProps = {
  note: Note
  onOpen: (noteId: string) => void
  onToggleFavorite: (noteId: string) => void
}

export const NoteCard = ({ note, onOpen, onToggleFavorite }: NoteCardProps) => {
  const title = note.title.trim() || copy.untitled
  const preview = note.body.trim() || '…'

  return (
    <article className="animate-fade-slide group relative overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-card-bg)] shadow-[0_1px_4px_var(--color-shadow)] transition-all duration-300 hover:border-[var(--color-indigo)]/20 hover:shadow-[0_3px_12px_var(--color-shadow)]">
      {/* left brush-stroke accent */}
      <span
        className="absolute inset-y-0 left-0 w-[3px] rounded-l-[10px] bg-gradient-to-b from-transparent via-[var(--color-indigo)]/30 to-transparent transition-opacity duration-300 group-hover:opacity-70"
        aria-hidden="true"
      />

      {/* favorite badge */}
      <button
        type="button"
        aria-label={`${copy.favorite} ${title}`}
        onClick={(event) => {
          event.stopPropagation()
          onToggleFavorite(note.id)
        }}
        className={`absolute right-[10px] top-[12px] flex min-h-10 min-w-10 items-center justify-center rounded-full text-[17px] leading-none transition-all duration-200 hover:scale-110 active:scale-95 ${
          note.isFavorite
            ? 'text-[var(--color-gold)]'
            : 'text-[var(--color-ink-muted)] opacity-40 hover:opacity-70'
        }`}
      >
        {note.isFavorite ? '★' : '☆'}
      </button>

      <button
        type="button"
        aria-label={title}
        onClick={() => onOpen(note.id)}
        className="w-full px-[21px] py-[18px] text-left"
      >
        <h3 className="pr-[44px] text-[16px] font-medium leading-snug tracking-[0.01em]">{title}</h3>
        <p className="mt-[6px] line-clamp-2 min-h-[40px] text-[14px] leading-[1.7] text-[var(--color-ink-muted)]">
          {preview}
        </p>
        <p className="mt-[10px] text-[12px] tracking-[0.02em] text-[var(--color-ink-muted)] opacity-60">
          {formatUpdatedAt(note.updatedAt, note.locale ?? 'ja')}
        </p>
      </button>
    </article>
  )
}
