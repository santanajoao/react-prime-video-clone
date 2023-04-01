import React, { useEffect, useState } from 'react';
import { fetchMoviesByGenres } from '../../../services/movies';
import ArrowButton from '../../ArrowButton';
import styles from './style.module.css';

const genresMap = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
};

export default function CategoryCarousel({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGenre();
  }, []);

  async function fetchGenre() {
    const genreId = genresMap[genre];
    if (!genreId) {
      throw new Error('invalid genre');
    }

    const results = await fetchMoviesByGenres(genreId);
    setMovies(results);
  }

  return (
    <div className={styles.carousel}>
      <ArrowButton
        textTip="Rolar para esquerda"
        direction="left"
        className={styles.left_button}
      />
      <ArrowButton
        textTip="Rolar para direita"
        direction="right"
        className={styles.right_button}
      />

      <ol className={styles.movie_list}>
        {movies.map((movie) => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
              width="330"
              height="185.5"
              loading="lazy"
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
