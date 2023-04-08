import React, { useEffect, useRef, useState } from 'react';
import { fetchMoviesByGenres } from '../../../services/movies';
import ArrowButton from '../../ArrowButton';
import MovieCard from '../MovieCard';
import styles from './style.module.css';
import useElementDimensions from '../../../hooks/useElementDimensions';

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
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(0);
  const { elementRef, dimensions } = useElementDimensions();

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

  const max = dimensions.scrollWidth - dimensions.width + 50;

  function calculateCarouselPosition() {
    const imagesWidth = 310;
    const howManyImagesFit = Math.trunc(dimensions.width / imagesWidth);
    const fitScreenPosition = howManyImagesFit * imagesWidth;
    let displacement = fitScreenPosition * selected;

    if (displacement < 0) {
      return 0;
    }
    if (displacement > max) {
      return max;
    }
    return displacement;
  }

  const displacement = calculateCarouselPosition();

  const listStyle = {
    transform: `translateX(-${displacement}px)`,
  };

  return (
    <div className={styles.carousel}>
      {displacement > 0 && (
        <ArrowButton
          textTip="Rolar para esquerda"
          direction="left"
          onClick={() => setSelected(selected - 1)}
          className={styles.left_button}
        />
      )}

      {displacement < max && (
        <ArrowButton
          textTip="Rolar para direita"
          direction="right"
          onClick={() => setSelected(selected + 1)}
          className={styles.right_button}
        />
      )}

      <ol style={listStyle} ref={elementRef} className={styles.movie_list}>
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
