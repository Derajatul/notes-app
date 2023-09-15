import styles from './Navbar.module.css'
import { useState } from 'react'

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value
    setSearch(searchTerm)
    onSearch(searchTerm)
  }
  return(
    <nav className={styles.container}>
      <h1>Notes</h1>
      <input 
        type="text" 
        placeholder="cari catatan..." 
        className={styles.search}   
        value={search}
        onChange={handleSearchChange}
      />
    </nav>
  )
}
export default Navbar