import styles from './CardNote.module.css'

const CardNote = ({id, title, createdAt, body, onDelete,archive, onArchive}) => {
  return(
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{createdAt}</p>
      <p>{body}</p>
      <div className={styles.buttons}>
        <button onClick={() => onDelete(id)} className={`${styles.button} ${styles.delete}`}>Delete</button>
        <button onClick={() => onArchive(id)} className={`${styles.button} ${styles.archive}`}>{archive ? "pindahkan" : "arsip"}</button>
      </div>
    </div>
  )
}
export default CardNote