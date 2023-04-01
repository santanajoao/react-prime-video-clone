import React from 'react';
import CategoryCarousel from './CategoryCarousel';
import CategoryHeader from './CategoryHeader';
import styles from './style.module.css';

export default function CategorySection({ title, genre }) {
  return (
    <section className={styles.category_section}>
      <CategoryHeader category={title} />
      <CategoryCarousel genre={genre} />
    </section>
  );
}
