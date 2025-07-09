import React from 'react';
import styles from '../components/home.module.scss';

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.profile}>
        <img
          src="/public/logo.jpg"
          alt="头像"
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h2 className={styles.name}>Vannik</h2>
          <p className={styles.bio}>
            后端开发者、系统架构师，热爱构建高质量服务与工具，也热衷于前端设计与体验优化。
          </p>
          <div className={styles.contact}>
            <a href="mailto:lorcan@example.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/lorcan" target="_blank" rel="noopener" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/lorcan" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <h1 className={styles.title}>欢迎来到我的技术博客</h1>
      <p className={styles.subtitle}>
        记录技术、生活与灵感，探索前端与后端的无限可能。
      </p>
      <a href="/blog" className={styles.button}>开始阅读</a>
    </section>
  );
}
