import styles from 'app/page.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.headerContent} ${styles.encaixe}`}>
        <h3>Pousada <span>Secreta</span></h3>
        <nav>
          <Link href='' className={styles.links}>SOBRE</Link>
          <Link href='' className={styles.links}>ROTA</Link>
          <Link href='' className={styles.links}>QUARTOS</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
