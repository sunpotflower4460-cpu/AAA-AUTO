import type { Note } from '../types/note'

const STORAGE_KEY = 'zanshin.notes.v1'

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const isNote = (value: unknown): value is Note => {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.body === 'string' &&
    typeof value.createdAt === 'string' &&
    typeof value.updatedAt === 'string' &&
    typeof value.isFavorite === 'boolean' &&
    (value.locale === undefined || value.locale === 'ja' || value.locale === 'en')
  )
}

export const loadNotes = (): Note[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return []
    }

    const parsed: unknown = JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(isNote)
  } catch {
    return []
  }
}

export const saveNotes = (notes: Note[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch {
    // ignore write failures in MVP
  }
}
