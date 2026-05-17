import { copy } from '../lib/i18n'

type EmptyStateProps = {
  onCreate: () => void
}

export const EmptyState = ({ onCreate }: EmptyStateProps) => (
  <section className="relative overflow-hidden rounded-[8px] border border-dashed border-[var(--color-line)] bg-white px-[21px] py-[34px] text-center">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[144px] w-[144px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-line)] opacity-30" />
    <p className="relative text-[17px] font-medium">{copy.emptyTitle}</p>
    <p className="relative mt-[8px] text-[13px] text-[var(--color-ink-muted)]">{copy.emptySubtitle}</p>
    <button
      type="button"
      aria-label={copy.newNote}
      onClick={onCreate}
      className="relative mt-[21px] min-h-11 rounded-[8px] border border-[var(--color-line)] px-[21px] text-[14px] text-[var(--color-sumi)] transition hover:border-[var(--color-gold)]"
    >
      {copy.newNote}
    </button>
  </section>
)
