// components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import styles from '../styles/ScrollToTop.module.scss'; // 确保是 .module.scss

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`${styles.scrollButton} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fas fa-chevron-up"></i>
        </button>
    );
}
