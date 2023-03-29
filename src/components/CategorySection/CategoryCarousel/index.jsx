import React from 'react';
import ArrowButton from '../../ArrowButton';

export default function CategoryCarousel() {
  return (
    <div>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />

      <ol></ol>
    </div>
  );
}
