import styles from './NoteList.module.css'
import CardNote from './CardNote'
import { showFormattedDate } from '../utils/index'

const NoteList = ({notes, onDelete, onArchive}) => {

  return(
    <div className={styles.container}>
      <h2>Catatan Aktif</h2>
      <div className={styles.list}>
        {notes.filter(note => !note.archived).length <= 0 && <p>Tidak ada catatan</p>}
        
        {notes.map((note) => {
          return !note.archived ? (
            <>
              <CardNote
                key={note.id}
                id={note.id}
                title={note.title} 
                body={note.body} 
                createdAt={showFormattedDate(note.createdAt)}
                archive = {note.archived}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            </>
            ) : null; 
          })}
      </div>
      
      <h2>Arsip</h2>
      <div className={styles.list}>
        {notes.filter(note => note.archived).length <= 0 && <p>Tidak ada catatan</p>}
        {notes.map((note) => {
          return note.archived ? (
            <>
              <CardNote
                key={note.id}
                id={note.id}
                title={note.title} 
                body={note.body}
                archive = {note.archived}
                createdAt={showFormattedDate(note.createdAt)}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            </>
            ) : null; 
          })}
      </div>
    </div>
  )
}
export default NoteList