import './App.css'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import ArsipNoteList from './components/ArsipNoteList'
import { useState } from 'react'
import {getInitialData} from './utils/index'

export default function App() {
  const [notes, setNotes] = useState(getInitialData)
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  
  const handleDelete = (noteId) => {
    setNotes(notes.filter(note => noteId !== note.id))
  }

  const handleSearch = (search) => {
    setSearchTerm(search)
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main>
        <NoteForm addNote={handleAddNote} />
        <NoteList notes={filteredNotes} onDelete={handleDelete} />
        <ArsipNoteList />
      </main>
    </>
    
    
  )
}
