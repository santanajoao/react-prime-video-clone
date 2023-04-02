import React, { useEffect, useRef, useState } from 'react';
import { fetchMoviesByGenres } from '../../../services/movies';
import ArrowButton from '../../ArrowButton';
import MovieCard from '../MovieCard';
import styles from './style.module.css';

const genresMap = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  drama: 18,
  family: 10751,
  fantasy: 14,
  horror: 27,
  war: 10752,
};

export default function CategoryCarousel({ genre }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [movies, setMovies] = useState([]);
  const movieList = useRef(null);

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

  function moveScroll(direction) {
    const scrollAmmount = window.innerWidth * 0.8;
    const difference = direction === 'left' ? -scrollAmmount : scrollAmmount;
    movieList.current.scrollTo({ left: scrollPosition + difference });
  }

  function handleScroll({ target }) {
    setScrollPosition(target.scrollLeft);
  }

  const listEl = movieList.current;
  const maxScroll = listEl?.scrollWidth - listEl?.clientWidth || 1;

  return (
    <div className={styles.carousel}>
      {scrollPosition > 0 && (
        <ArrowButton
          textTip="Rolar para esquerda"
          direction="left"
          onClick={() => moveScroll('left')}
          className={styles.left_button}
        />
      )}

      {scrollPosition < maxScroll && (
        <ArrowButton
          textTip="Rolar para direita"
          direction="right"
          onClick={() => moveScroll('rigth')}
          className={styles.right_button}
        />
      )}

      <ol ref={movieList} onScroll={handleScroll} className={styles.movie_list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              title={movie.title}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
