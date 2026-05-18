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
  const isSearchActive = normalizedQuery.length > 0

  const filtered = sortNotes(
    notes.filter((note) =>
      `${note.title}\n${note.body}`.toLowerCase().includes(normalizedQuery),
    ),
  )

  return (
    <section className="relative flex min-h-[calc(100svh-42px)] flex-col px-[21px] pb-[89px] pt-[34px] sm:px-[34px] sm:pt-[55px]">
      <header className="animate-fade-slide">
        <p className="title-font text-[38px] font-light tracking-[0.06em] leading-none text-[var(--color-sumi)] sm:text-[44px]">
          {copy.appName}
        </p>
        <p className="mt-[8px] text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)] opacity-70">
          {copy.appSubtitle}
        </p>

        <div className="mt-[21px] h-px w-[55px] bg-gradient-to-r from-[var(--color-indigo)]/30 to-transparent" />

        <p className="mt-[13px] text-[14px] leading-[1.75] text-[var(--color-ink-muted)] italic">
          {copy.tagline}
        </p>
        <div className="mt-[10px]">
          <ZanshinMark />
        </div>
      </header>

      <div className="mt-[34px] animate-fade-slide" style={{ animationDelay: '60ms' }}>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>

      <div className="mt-[21px] flex-1 space-y-[10px]">
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
          <EmptyState
            onCreate={onCreate}
            isSearchEmpty={isSearchActive}
            onClearSearch={isSearchActive ? () => onSearchChange('') : undefined}
          />
        )}
      </div>

      <button
        type="button"
        aria-label={copy.newNote}
        onClick={onCreate}
        className="fixed bottom-[max(21px,env(safe-area-inset-bottom))] right-[21px] z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[var(--color-sumi)] text-[24px] text-[var(--color-washi)] shadow-[0_4px_16px_rgba(31,27,24,0.22)] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_6px_24px_rgba(31,27,24,0.28)] active:scale-[0.97]"
      >
        ＋
      </button>
    </section>
  )
}
