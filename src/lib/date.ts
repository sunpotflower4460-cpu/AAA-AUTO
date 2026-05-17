const toDateAtMidnight = (value: Date): Date => {
  const date = new Date(value)
  date.setHours(0, 0, 0, 0)
  return date
}

export const formatUpdatedAt = (updatedAt: string, locale: 'ja' | 'en' = 'ja'): string => {
  const parsed = new Date(updatedAt)

  if (Number.isNaN(parsed.getTime())) {
    return locale === 'ja' ? '日付不明' : 'Unknown date'
  }

  const today = toDateAtMidnight(new Date())
  const target = toDateAtMidnight(parsed)
  const diffDays = Math.round((today.getTime() - target.getTime()) / 86_400_000)

  if (diffDays === 0) {
    return locale === 'ja' ? '今日' : 'Today'
  }

  if (diffDays === 1) {
    return locale === 'ja' ? '昨日' : 'Yesterday'
  }

  if (locale === 'en') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(parsed)
  }

  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(parsed)
}
