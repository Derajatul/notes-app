import styles from './CardNote.module.css'

const CardNote = ({id, title, createdAt, body, onDelete}) => {
  return(
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{createdAt}</p>
      <p>{body}</p>
      <div className={styles.buttons}>
        <button onClick={() => onDelete(id)} className={`${styles.button} ${styles.delete}`}>Delete</button>
        <button className={`${styles.button} ${styles.archive}`}>Arsip</button>
      </div>
    </div>
  )
}
export default CardNote