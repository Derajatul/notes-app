import styles from './NoteForm.module.css'
import { useState, useEffect } from 'react'

const NoteForm = ({addNote}) => {
  const [note, setNote] = useState({
    id: 0,title: '',
    body: '',
    createdAt: new Date().toISOString(),
    archive: false 
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
      archive: false 
    })
  }

  useEffect(() => {
    console.log(note)
  })
  
  return(
    <div className={styles.container}>
      <h2>Buat Catatan</h2>
      <span>sisa karakter</span>
      <form className={styles.form} onSubmit={handleAddNote}>
        <input name="title" type="text" className={styles.title} placeholder=" Title" onChange={handleChange} />
        <textarea name="body" className={styles.description} placeholder=" Description" onChange={handleChange} />
        <button className={styles.button} type="submit">Buat</button>
      </form>
    </div>
  )
}

export default NoteForm