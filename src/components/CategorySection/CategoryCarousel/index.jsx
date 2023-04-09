import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useElementDimensions from '../../../hooks/useElementDimensions';
import ArrowButton from '../../ArrowButton';
import MovieCard from '../MovieCard';
import styles from './style.module.css';

// se alterar aqui vvvvv mude também no css
const PADDING = 50;
const IMAGES_WIDTH = 300;

export default function CategoryCarousel({ movies }) {
  const [translate, setTranslate] = useState(0);
  const { elementRef, dimensions, getDimensions } = useElementDimensions();

  useEffect(() => {
    getDimensions();
  }, [movies]);

  const maxTranslate = dimensions.scrollWidth - dimensions.width + PADDING;

  function checkTranslate(value) {
    if (value < 0) {
      setTranslate(0);
    } else if (value > maxTranslate) {
      setTranslate(maxTranslate);
    } else {
      setTranslate(value || 0);
    }
  }

  function focusOnCard(index) {
    checkTranslate(IMAGES_WIDTH * index);
  }

  function moveCarousel(direction) {
    const { width } = dimensions;

    const difference = direction === 'left' ? -width : width;
    const translateSum = difference + translate;
    const howManyImagesFit = Math.trunc(translateSum / IMAGES_WIDTH);

    const newTranslate = howManyImagesFit * IMAGES_WIDTH;
    checkTranslate(newTranslate);
  }

  function handleWheel(event) {
    if (event.deltaX !== 0) {
      const difference = translate + event.deltaX;
      checkTranslate(difference);
    }
  }

  const listStyle = { transform: `translateX(-${translate}px)` };

  return (
    <div className={styles.carousel}>
      {translate > 0 && (
        <ArrowButton
          textTip="Rolar para esquerda"
          direction="left"
          onClick={() => moveCarousel('left')}
          className={styles.left_button}
        />
      )}

      {translate < maxTranslate && (
        <ArrowButton
          textTip="Rolar para direita"
          direction="right"
          onClick={() => moveCarousel('right')}
          className={styles.right_button}
        />
      )}

      <ol
        style={listStyle}
        ref={elementRef}
        onWheel={handleWheel}
        className={styles.movie_list}
      >
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <MovieCard
              onFocus={() => focusOnCard(index)}
              image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              title={movie.title || movie.original_title || movie.original_name}
              description={movie.overview}
              releaseYear={movie.release_date?.slice(0, 4)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

CategoryCarousel.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      backdrop_path: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
    }),
  ).isRequired,
};
