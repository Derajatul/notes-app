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
  const [maxLength, setMaxLength] = useState(50)
  
  const handleTitle = (e) => {
    const titleInput = e.target.value
    setMaxLength(50 - titleInput.length);
    if(titleInput.length < 50){
      setNote({
        ...note,
        title: titleInput
      })  
    }
  }
  const handleBody = (e) => {
    setNote({
      ...note,
      body: e.target.value
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
      {maxLength <= 10 ? (
        <p>sisa karakter <span  style={{color: "red"}}> {maxLength}</span></p>
        
      ) : (
        <p>sisa karakter <span  style={{color: "green"}}> {maxLength}</span></p>
       
      )}
      <form className={styles.form} onSubmit={handleAddNote}>
        <input required name="title" value={note.title} type="text" className={styles.title} placeholder=" Title" onChange={handleTitle} />
        <textarea required name="body" value={note.body} className={styles.description} placeholder=" Description" onChange={handleBody} />
        <button className={styles.button} type="submit">Buat</button>
      </form>
    </div>
  )
}

export default NoteForm