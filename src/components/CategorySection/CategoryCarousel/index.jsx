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

const maxScroll = 5;

export default function CategoryCarousel({ genre }) {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(0);
  const [max, setMax] = useState(0);
  const movieList = useRef(null);

  useEffect(() => {
    fetchGenre();
    adjustCarouselStyles();
  }, []);

  function adjustCarouselStyles() {
    window.addEventListener('resize', () => {
      const movieListEl = movieList.current;
      const max = movieListEl?.scrollWidth - movieListEl?.clientWidth + 50;
      setMax(max);
    });
  }

  async function fetchGenre() {
    const genreId = genresMap[genre];
    if (!genreId) {
      throw new Error('invalid genre');
    }

    const results = await fetchMoviesByGenres(genreId);
    setMovies(results);
  }

  const listStyle = {
    transform: `translateX(0)`,
  };

  return (
    <div className={styles.carousel}>
      {selected > 0 && (
        <ArrowButton
          textTip="Rolar para esquerda"
          direction="left"
          onClick={() => setSelected(selected - 1)}
          className={styles.left_button}
        />
      )}

      {selected < maxScroll && (
        <ArrowButton
          textTip="Rolar para direita"
          direction="right"
          onClick={() => setSelected(selected + 1)}
          className={styles.right_button}
        />
      )}

      <ol style={listStyle} ref={movieList} className={styles.movie_list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard
              image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              title={movie.title}
              description={movie.overview}
              releaseYear={movie.release_date?.slice(0, 4)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
