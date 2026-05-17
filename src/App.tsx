import { useEffect, useMemo, useRef, useState } from 'react'
import { AppShell } from './components/AppShell'
import { NoteEditor } from './components/NoteEditor'
import { NotesList } from './components/NotesList'
import { copy } from './lib/i18n'
import { loadNotes, saveNotes } from './lib/storage'
import type { Note } from './types/note'

const nowIso = () => new Date().toISOString()

const createNote = (): Note => {
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`

  const now = nowIso()

  return {
    id,
    title: '',
    body: '',
    createdAt: now,
    updatedAt: now,
    isFavorite: false,
    locale: 'ja',
  }
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>(() => loadNotes())
  const [searchQuery, setSearchQuery] = useState('')
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle')
  const isInitialLoad = useRef(true)

  const activeNote = useMemo(
    () => notes.find((note) => note.id === activeNoteId) ?? null,
    [activeNoteId, notes],
  )

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }

    setSaveState('saving')

    const timer = window.setTimeout(() => {
      saveNotes(notes)
      setSaveState('saved')
    }, 350)

    return () => window.clearTimeout(timer)
  }, [notes])

  useEffect(() => {
    if (saveState !== 'saved') {
      return
    }

    const timer = window.setTimeout(() => setSaveState('idle'), 1200)
    return () => window.clearTimeout(timer)
  }, [saveState])

  const openNewNote = () => {
    const note = createNote()
    setNotes((current) => [note, ...current])
    setActiveNoteId(note.id)
    setSearchQuery('')
  }

  const updateActiveNote = (patch: Partial<Pick<Note, 'title' | 'body' | 'isFavorite'>>) => {
    if (!activeNoteId) {
      return
    }

    setNotes((current) =>
      current.map((note) =>
        note.id === activeNoteId
          ? {
              ...note,
              ...patch,
              updatedAt: nowIso(),
            }
          : note,
      ),
    )
  }

  const toggleFavorite = (noteId: string) => {
    setNotes((current) =>
      current.map((note) =>
        note.id === noteId
          ? {
              ...note,
              isFavorite: !note.isFavorite,
              updatedAt: nowIso(),
            }
          : note,
      ),
    )
  }

  const deleteActive = () => {
    if (!activeNoteId) {
      return
    }

    const confirmed = window.confirm(copy.releaseConfirm)

    if (!confirmed) {
      return
    }

    setNotes((current) => current.filter((note) => note.id !== activeNoteId))
    setActiveNoteId(null)
  }

  return (
    <AppShell>
      {activeNote ? (
        <NoteEditor
          note={activeNote}
          saveState={saveState}
          onBack={() => setActiveNoteId(null)}
          onDelete={deleteActive}
          onToggleFavorite={() => toggleFavorite(activeNote.id)}
          onChangeTitle={(title) => updateActiveNote({ title })}
          onChangeBody={(body) => updateActiveNote({ body })}
        />
      ) : (
        <NotesList
          notes={notes}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCreate={openNewNote}
          onOpen={setActiveNoteId}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </AppShell>
  )
}

export default App
