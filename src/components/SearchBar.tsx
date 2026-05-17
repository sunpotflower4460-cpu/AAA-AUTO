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
      placeholder={`${copy.searchPlaceholder} / ${copy.searchPlaceholderEn}`}
      className="h-11 w-full rounded-[8px] border border-[var(--color-line)] bg-white px-[13px] text-[15px] text-[var(--color-sumi)] outline-none transition focus:border-[var(--color-indigo)]"
    />
  </label>
)
