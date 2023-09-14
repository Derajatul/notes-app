import styles from './Navbar.module.css'

const Navbar = () => {
  return(
    <nav className={styles.container}>
      <h1>Notes</h1>
      <input 
        type="text" 
        placeholder="cari catatan..." 
        className={styles.search}
      />
    </nav>
  )
}
export default Navbar