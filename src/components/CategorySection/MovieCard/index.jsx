import React from 'react';
import styles from './style.module.css';

export default function MovieCard({ image, title }) {
  return (
    <a href="" className={styles.movie_ancor}>
      <div className={styles.movie_card}>
        <div className={styles.prime_tag}>prime</div>

        <img src={image} className={styles.movie_banner} alt={title} />
      </div>
    </a>
  );
}
