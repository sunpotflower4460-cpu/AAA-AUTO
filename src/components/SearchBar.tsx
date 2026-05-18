import { copy } from '../lib/i18n'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="block">
    <span className="sr-only">{copy.searchPlaceholder}</span>
    <input
      aria-label={copy.searchPlaceholder}
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={`${copy.searchPlaceholder}  /  ${copy.searchPlaceholderEn}`}
      className="h-10 w-full rounded-[8px] border border-[var(--color-line)] bg-[var(--color-washi)]/50 px-[13px] text-[14px] text-[var(--color-sumi)] outline-none transition-all duration-200 placeholder:text-[var(--color-ink-muted)] placeholder:opacity-50 focus:border-[var(--color-indigo)]/40 focus:bg-[var(--color-paper)]"
    />
  </label>
)
