import { copy } from '../lib/i18n'

export const ZanshinMark = () => (
  <div className="flex items-center gap-[8px] text-[12px] tracking-[0.12em] text-[var(--color-ink-muted)]" aria-hidden="true">
    <span className="zanshin-enso" />
    <span className="opacity-60">{copy.taglineEn}</span>
  </div>
)
