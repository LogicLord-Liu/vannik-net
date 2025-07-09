import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>Vannik</a>

        {/* 移动端菜单按钮 */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        {/* 桌面菜单 */}
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <a href="/" className={styles.menuItem}>Home</a>
          <a href="/blog" className={styles.menuItem}>Blog</a>
          <a href="/about" className={styles.menuItem}>About</a>
          <a href="/contact" className={styles.menuItem}>Contact</a>
        </div>

        {/* 桌面操作按钮 */}
        <div className={styles.actions}>
          <button className={styles.toggleBtn} onClick={toggleDarkMode}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={toggleMenu}></div>

          <div className={styles.slideMenu}>
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="/blog" onClick={toggleMenu}>Blog</a>
            <a href="/about" onClick={toggleMenu}>About</a>
            <a href="/contact" onClick={toggleMenu}>Contact</a>
            <div className={styles.mobileActions}>
              <button onClick={toggleDarkMode}>{darkMode ? '🌞' : '🌙'}</button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
