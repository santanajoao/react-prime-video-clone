import React from 'react';
import CategoryCarousel from './CategoryCarousel';
import CategoryHeader from './CategoryHeader';

export default function CategorySection({ title, genre }) {
  return (
    <section>
      <CategoryHeader category={title} />
      <CategoryCarousel genre={genre} />
    </section>
  );
}
