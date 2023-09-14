import styles from './NoteList.module.css'
import CardNote from './CardNote'
import { showFormattedDate } from '../utils/index'

const NoteList = ({notes}) => {
  return(
    <div className={styles.container}>
      <h2>Catatan Aktif</h2>
      <div className={styles.list}>
      {notes.map(note => (
        <CardNote
          key={note.title}
          title={note.title} 
          body={note.body} 
          createdAt={showFormattedDate(note.createdAt)}
        />
      ))}
      </div>
    </div>
  )
}
export default NoteList