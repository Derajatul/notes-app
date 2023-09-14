import styles from './CardNote.module.css'

const CardNote = ({title, createdAt, body}) => {
  return(
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{createdAt}</p>
      <p>{body}</p>
    </div>
  )
}
export default CardNote