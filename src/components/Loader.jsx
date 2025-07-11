import React from 'react';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
    </div>
  );
}
