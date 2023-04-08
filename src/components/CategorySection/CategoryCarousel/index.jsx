import React, { useEffect, useState } from 'react';
import ArrowButton from '../../ArrowButton';
import MovieCard from '../MovieCard';
import styles from './style.module.css';
import useElementDimensions from '../../../hooks/useElementDimensions';

const padding = 50;

export default function CategoryCarousel({ movies }) {
  const { elementRef, dimensions, getDimensions } = useElementDimensions();
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    getDimensions();
  }, [movies]);

  const maxTranslate = dimensions.scrollWidth - dimensions.width + padding;
  const imagesWidth = 300;

  function focusOnCard(index) {
    let newTranslate = imagesWidth * index;
    if (newTranslate > maxTranslate) {
      newTranslate = maxTranslate;
    }
    setTranslate(newTranslate);
  }

  function moveCarousel(direction) {
    const { width } = dimensions;

    const difference = direction === 'left' ? -width : width;
    const translateSum = difference + translate;
    const howManyImagesFit = Math.trunc(translateSum / imagesWidth);

    let newTranslate = howManyImagesFit * imagesWidth;
    if (newTranslate < 0) {
      setTranslate(0);
    } else if (newTranslate > maxTranslate) {
      setTranslate(maxTranslate);
    } else {
      setTranslate(newTranslate || 0);
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

      <ol style={listStyle} ref={elementRef} className={styles.movie_list}>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <MovieCard
              onFocus={() => focusOnCard(index)}
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
