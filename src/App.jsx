import './App.css'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import ArsipNoteList from './components/ArsipNoteList'
import { useState } from 'react'
import {getInitialData} from './utils/index'

export default function App() {
  const [notes, setNotes] = useState(getInitialData)

  const addNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const handleDelete = (noteId) => {
    setNotes(notes.filter(note => noteId !== note.id))
  }
  return (
    <>
      <Navbar />
      <main>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} onDelete={handleDelete} />
        <ArsipNoteList />
      </main>
    </>
    
    
  )
}
