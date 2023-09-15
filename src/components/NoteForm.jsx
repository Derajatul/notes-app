import styles from './NoteForm.module.css'
import { useState, useEffect } from 'react'

const NoteForm = ({addNote}) => {
  const [note, setNote] = useState({
    id: +new Date(),
    title: '',
    body: '',
    createdAt: new Date().toISOString(),
    archived: false 
  })

  
  const handleChange = (e) => {
    setNote({
    ...note,
    [e.target.name]: e.target.value
    })
  }

  const handleAddNote = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({
      id: +new Date(), 
      title: '',
      body: '',
      createdAt: new Date().toISOString(), 
      archived: false 
    })
  }
  
  return(
    <div className={styles.container}>
      <h2>Buat Catatan</h2>
      <span>sisa karakter</span>
      <form className={styles.form} onSubmit={handleAddNote}>
        <input required name="title" value={note.title} type="text" className={styles.title} placeholder=" Title" onChange={handleChange} />
        <textarea required name="body" value={note.body} className={styles.description} placeholder=" Description" onChange={handleChange} />
        <button className={styles.button} type="submit">Buat</button>
      </form>
    </div>
  )
}

export default NoteForm