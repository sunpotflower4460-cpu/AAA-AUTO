import { copy } from '../lib/i18n'

export const ZanshinMark = () => (
  <div className="flex items-center gap-2 text-[13px] text-[var(--color-ink-muted)]" aria-hidden="true">
    <span className="zanshin-enso" />
    <span>{copy.taglineEn}</span>
  </div>
)
