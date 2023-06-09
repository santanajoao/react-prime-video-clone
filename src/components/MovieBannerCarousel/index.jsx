import React, { useEffect, useState } from 'react';
import useIndexSelection from '../../hooks/useIndexSelection';
import { fetchPopularMovies } from '../../services/movies';
import getMoviesWithThumb from '../../helpers/movies';
import LabelAndRadio from './LabelAndRadio';
import styles from './style.module.css';
import ArrowButton from '../ArrowButton';
import ConditionalAncor from './ConditionalAncor';

// componentizar os elementos
const MIN_SELECTION = 0;
const NUMBER_OF_MOVIES_DISPLAYED = 10;

export default function MovieBannerCarousel() {
  const [movies, setMovies] = useState([]);
  const { selected, select, selectNext, selectPrevious } = useIndexSelection(
    MIN_SELECTION,
    NUMBER_OF_MOVIES_DISPLAYED,
  );

  async function getPopularMovies() {
    const movieList = await fetchPopularMovies();
    const nFirstMostPopular = getMoviesWithThumb(
      movieList,
      NUMBER_OF_MOVIES_DISPLAYED,
    );
    setMovies(nFirstMostPopular);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  if (movies.length === 0) return null;

  const firstIsNotSelected = selected !== MIN_SELECTION;
  const lastIsNotSelected = selected !== NUMBER_OF_MOVIES_DISPLAYED - 1;
  const movieStyle = `translateX(-${selected * 100}vw)`;

  return (
    <div className={styles.carousel}>
      {firstIsNotSelected && (
        <ArrowButton
          textTip="Mover para banner do filme anterior"
          onClick={selectPrevious}
          direction="left"
          className={styles.left_button}
        />
      )}

      {lastIsNotSelected && (
        <ArrowButton
          textTip="Mover para o banner do próximo filme"
          onClick={selectNext}
          direction="right"
          className={styles.right_button}
        />
      )}

      <div className={styles.radios_wrapper}>
        {movies.map(({ id }, index) => (
          <LabelAndRadio
            key={`label-radio-${id}`}
            value={index}
            onChange={() => select(index)}
            name="carousel-selection"
            label={`Selecionar o filme ${index + 1} do carrossel`}
            id={`radio-${id}`}
            className={styles.radio}
            checked={selected === index}
          />
        ))}
      </div>

      <ol className={styles.movie_list} style={{ transform: movieStyle }}>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            <ConditionalAncor
              shouldRender={index === selected}
              href="#link-to-movie"
            >
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                className={styles.movie_image}
                alt={movie.title || movie.original_title || movie.original_name}
              />
            </ConditionalAncor>
          </li>
        ))}
      </ol>
    </div>
  );
}
