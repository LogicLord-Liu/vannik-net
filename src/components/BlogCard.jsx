import React from 'react';
import styles from './BlogCard.module.scss';
import { formatDate } from '../utils/formatDate';

export default function BlogCard({ post }) {
    return (
        <a href={post.url} className={`${styles.card} ${!post.cover ? styles.noImage : ''}`}>
            {post.cover && (
                <img src={post.cover} alt={post.title} className={styles.cover} />
            )}
            <div className={`${styles.content} ${!post.cover ? styles.centered : ''}`}>
                <h3 className={styles.title}>{post.title}</h3>
                <div className={styles.meta}>
                    <span>{formatDate(post.date, 'zh')}</span>
                    <span> · </span>
                    <span>{post.author || '佚名'}</span>
                    {post.readingTime && <span> · {post.readingTime}</span>}
                </div>
                <div className={styles.tags}>
                    {post.tags?.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                </div>
            </div>
        </a>

    );
}
