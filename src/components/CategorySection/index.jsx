import React from 'react';
import styles from './style.module.css';

export default function CategorySection() {
  return (
    <section>
      <div className={styles.top}>
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png"
          className={styles.prime_logo}
          alt="Incluído no prime"
        />
        <h2 className={styles.category_title}>Filmes para toda a família</h2>
        <a href="#" className={styles.category_ancor}>
          Veja mais
        </a>
      </div>
    </section>
  );
}
