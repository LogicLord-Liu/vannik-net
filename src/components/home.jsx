import React from 'react';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>欢迎使用 Astro + React + Sass + CSS Modules</h1>
      <p className={styles.subtitle}>
        这是一个结合了 React 组件和 Sass 模块样式的示例页面。
      </p>
      <a href="https://astro.build" target="_blank" rel="noopener noreferrer" className={styles.button}>
        访问 Astro 官网
      </a>
    </section>
  );
}
