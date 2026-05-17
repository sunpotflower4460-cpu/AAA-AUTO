import type { Note } from '../types/note'

const STORAGE_KEY = 'zanshin.notes.v1'
const canUseStorage = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

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
  if (!canUseStorage()) {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return []
    }

    const parsed: unknown = JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      window.localStorage.removeItem(STORAGE_KEY)
      return []
    }

    const validNotes = parsed.filter(isNote)

    if (validNotes.length !== parsed.length) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(validNotes))
    }

    return validNotes
  } catch {
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore cleanup failures
    }
    return []
  }
}

export const saveNotes = (notes: Note[]): void => {
  if (!canUseStorage()) {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch {
    // ignore write failures in MVP
  }
}
