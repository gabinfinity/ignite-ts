import styles from './styles.module.css'
import igniteLogo from '../../assets/svgs/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite"></img>
    </header>
  )
}
