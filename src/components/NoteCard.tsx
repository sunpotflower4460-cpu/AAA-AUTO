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
    <article className="group relative rounded-[8px] border border-[var(--color-line)] bg-white p-[21px] shadow-[0_4px_13px_var(--color-shadow)] transition hover:-translate-y-[1px]">
      <span className="absolute inset-y-[13px] left-[8px] w-px bg-[var(--color-indigo)]/35" aria-hidden="true" />
      <button
        type="button"
        aria-label={`${copy.favorite} ${title}`}
        onClick={(event) => {
          event.stopPropagation()
          onToggleFavorite(note.id)
        }}
        className="absolute right-[13px] top-[13px] flex min-h-11 min-w-11 items-center justify-center rounded-full text-[18px] leading-none text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/10"
      >
        {note.isFavorite ? '●' : '○'}
      </button>
      <button
        type="button"
        aria-label={title}
        onClick={() => onOpen(note.id)}
        className="w-full text-left"
      >
        <h3 className="pr-[55px] text-[17px] leading-snug">{title}</h3>
        <p className="mt-[8px] line-clamp-2 min-h-[42px] text-[15px] leading-[1.618] text-[var(--color-ink-muted)]">
          {preview}
        </p>
        <p className="mt-[13px] text-[13px] text-[var(--color-ink-muted)]">
          {formatUpdatedAt(note.updatedAt, note.locale ?? 'ja')}
        </p>
      </button>
    </article>
  )
}
