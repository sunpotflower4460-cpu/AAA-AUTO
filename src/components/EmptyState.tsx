import { copy } from '../lib/i18n'

type EmptyStateProps = {
  onCreate: () => void
  isSearchEmpty?: boolean
  onClearSearch?: () => void
}

export const EmptyState = ({ onCreate, isSearchEmpty = false, onClearSearch }: EmptyStateProps) => (
  <section className="animate-fade-slide relative overflow-hidden rounded-[12px] border border-dashed border-[var(--color-line)] px-[21px] py-[55px] text-center">
    {/* enso decoration — two concentric circles, brush-circle feel */}
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-indigo)]/8"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-indigo)]/5"
      aria-hidden="true"
    />

    <p className="relative title-font text-[18px] font-light tracking-[0.03em] text-[var(--color-sumi)]">
      {isSearchEmpty ? copy.emptySearchTitle : copy.emptyTitle}
    </p>
    <p className="relative mt-[10px] text-[13px] tracking-[0.02em] text-[var(--color-ink-muted)] opacity-70">
      {isSearchEmpty ? copy.emptySearchSubtitle : copy.emptySubtitle}
    </p>
    <div className="relative mt-[28px] flex flex-wrap items-center justify-center gap-[8px]">
      <button
        type="button"
        aria-label={copy.newNote}
        onClick={onCreate}
        className="min-h-10 rounded-[8px] border border-[var(--color-line)] px-[21px] text-[14px] text-[var(--color-sumi)] transition-all duration-200 hover:border-[var(--color-indigo)]/40 hover:bg-[var(--color-indigo)]/4"
      >
        {copy.newNote}
      </button>
      {isSearchEmpty && onClearSearch ? (
        <button
          type="button"
          aria-label={copy.clearSearch}
          onClick={onClearSearch}
          className="min-h-10 rounded-[8px] border border-[var(--color-line)] px-[21px] text-[14px] text-[var(--color-sumi)] transition-all duration-200 hover:border-[var(--color-indigo)]/40 hover:bg-[var(--color-indigo)]/4"
        >
          {copy.clearSearch}
        </button>
      ) : null}
    </div>
  </section>
)
