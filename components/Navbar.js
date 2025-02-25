import useMobileNav from '../hooks/useMobileNav';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const { isNavOpen, toggleNav } = useMobileNav();

  return (
    <nav className={styles.navbar}>
      <h1>Nords Event Communications</h1>
      <button onClick={toggleNav}>☰</button>
      {isNavOpen && <div className={styles.mobileMenu}>Menu Content</div>}
    </nav>
  );
}
