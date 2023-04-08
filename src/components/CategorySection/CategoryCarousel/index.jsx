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

const padding = 50;

export default function CategoryCarousel({ genre }) {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(0);
  const { elementRef, dimensions, getDimensions } = useElementDimensions();

  useEffect(() => {
    fetchGenre();
  }, []);

  useEffect(() => {
    getDimensions();
  }, [selected]);

  async function fetchGenre() {
    const genreId = genresMap[genre];
    if (!genreId) {
      throw new Error('invalid genre');
    }

    const results = await fetchMoviesByGenres(genreId);
    setMovies(results);
  }

  const maxTranslate = dimensions.scrollWidth - dimensions.width + padding;

  function calculateCarouselPosition() {
    const imagesWidth = 310;
    const howManyImagesFit = Math.trunc(dimensions.width / imagesWidth);
    const fitScreenPosition = howManyImagesFit * imagesWidth;

    let translate = fitScreenPosition * selected;
    if (translate < 0) {
      return 0;
    }
    if (translate > maxTranslate) {
      return maxTranslate;
    }
    return translate || 0;
  }

  const translate = calculateCarouselPosition();

  const listStyle = {
    transform: `translateX(-${translate}px)`,
  };

  return (
    <div className={styles.carousel}>
      {translate > 0 && (
        <ArrowButton
          textTip="Rolar para esquerda"
          direction="left"
          onClick={() => setSelected(selected - 1)}
          className={styles.left_button}
        />
      )}

      {translate < maxTranslate && (
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
