import styles from './NoteForm.module.css'

const NoteForm = ({onSubmit}) => {
  return(
    <div className={styles.container}>
      <h2>Buat Catatan</h2>
      <span>sisa karakter</span>
      <form className={styles.form} onSubmit={onSubmit}>
        <input type="text" className={styles.title} placeholder=" Title" />
        <textarea className={styles.description} placeholder=" Description" />
        <button className={styles.button} type="submit">Buat</button>
      </form>
    </div>
  )
}

export default NoteForm