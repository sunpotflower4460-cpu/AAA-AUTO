import { copy } from '../lib/i18n'
import type { Note } from '../types/note'
import { EmptyState } from './EmptyState'
import { NoteCard } from './NoteCard'
import { SearchBar } from './SearchBar'
import { ZanshinMark } from './ZanshinMark'

type NotesListProps = {
  notes: Note[]
  searchQuery: string
  onSearchChange: (value: string) => void
  onCreate: () => void
  onOpen: (noteId: string) => void
  onToggleFavorite: (noteId: string) => void
}

const sortNotes = (notes: Note[]) =>
  [...notes].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) {
      return Number(b.isFavorite) - Number(a.isFavorite)
    }

    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

export const NotesList = ({
  notes,
  searchQuery,
  onSearchChange,
  onCreate,
  onOpen,
  onToggleFavorite,
}: NotesListProps) => {
  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filtered = sortNotes(
    notes.filter((note) =>
      `${note.title}\n${note.body}`.toLowerCase().includes(normalizedQuery),
    ),
  )

  return (
    <section className="relative flex min-h-[calc(100svh-42px)] flex-col px-[21px] pb-[89px] pt-[34px]">
      <header>
        <p className="title-font text-[21px] tracking-[0.03em]">{copy.appName}</p>
        <p className="mt-[4px] text-[13px] text-[var(--color-ink-muted)]">{copy.appSubtitle}</p>
        <p className="mt-[13px] text-[15px] leading-[1.618] text-[var(--color-sumi)]">{copy.tagline}</p>
        <div className="mt-[8px]">
          <ZanshinMark />
        </div>
      </header>

      <div className="mt-[34px]">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>

      <div className="mt-[21px] flex-1 space-y-[13px]">
        {filtered.length > 0 ? (
          filtered.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onOpen={onOpen}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        ) : (
          <EmptyState onCreate={onCreate} />
        )}
      </div>

      <button
        type="button"
        aria-label={copy.newNote}
        onClick={onCreate}
        className="fixed bottom-[max(21px,env(safe-area-inset-bottom))] right-[21px] z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-sumi)] text-[26px] text-[var(--color-washi)] shadow-[0_8px_21px_var(--color-shadow)] transition hover:scale-[1.02]"
      >
        ＋
      </button>
    </section>
  )
}
