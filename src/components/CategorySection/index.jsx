import React from 'react';
import CategoryCarousel from './CategoryCarousel';
import CategoryHeader from './CategoryHeader';
// import styles from './style.module.css';

export default function CategorySection() {
  return (
    <section>
      <CategoryHeader category="Filmes para toda a família" />
      <CategoryCarousel />
    </section>
  );
}
