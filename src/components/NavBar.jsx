import React from 'react';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>我的网站</div>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>首页</a>
          <a href="/about" className={styles.navLink}>关于</a>
          <a href="/contact" className={styles.navLink}>联系</a>
        </div>
      </div>
    </nav>
  );
}
