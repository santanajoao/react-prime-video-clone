import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMoviesByGenres } from '../../services/movies';
import CategoryCarousel from './CategoryCarousel';
import CategoryHeader from './CategoryHeader';
import styles from './style.module.css';

export default function CategorySection({ title, genre }) {
  const [movies, setMovies] = useState([]);

  async function fetchGenre() {
    const results = await fetchMoviesByGenres(genre);
    setMovies(results);
  }

  useEffect(() => {
    fetchGenre();
  }, []);

  if (movies.length === 0) return null;

  return (
    <section className={styles.category_section}>
      <CategoryHeader category={title} />
      <CategoryCarousel movies={movies} />
    </section>
  );
}

CategorySection.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
