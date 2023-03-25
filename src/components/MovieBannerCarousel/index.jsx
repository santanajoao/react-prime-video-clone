import React, { useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import useIndexSelection from '../../hooks/useIndexSelection';
import { fetchPopularMovies } from '../../services/movies';
import styles from './style.module.css';

// componentizar os elementos
const MIN_SELECTION = 0;
const NUMBER_OF_MOVIES_DISPLAYED = 10;

export default function MovieBannerCarousel() {
  const [movies, setMovies] = useState([]);
  const movieList = useRef(null);

  const { selected, setSelected, selectNext, selectPrevious } =
    useIndexSelection(MIN_SELECTION, NUMBER_OF_MOVIES_DISPLAYED);

  async function getPopularMovies() {
    const movies = await fetchPopularMovies();
    const nFirstMostPopular = movies.splice(0, NUMBER_OF_MOVIES_DISPLAYED);
    setMovies(nFirstMostPopular);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    movieList?.current?.scrollTo({ left: window.innerWidth * selected });
  }, [selected]);

  if (movies.length === 0) {
    return null;
  }

  const firstIsNotSelected = selected !== MIN_SELECTION;
  const lastIsNotSelected = selected !== NUMBER_OF_MOVIES_DISPLAYED - 1;

  return (
    <div className={styles.carousel}>
      {firstIsNotSelected && (
        <button onClick={selectPrevious} className={styles.left_button}>
          <span className="screen-readers-only">
            Mover para o banner do filme anterior
          </span>
          <SlArrowLeft className={styles.left_icon} />
        </button>
      )}

      {lastIsNotSelected && (
        <button onClick={selectNext} className={styles.right_button}>
          <span className="screen-readers-only">
            Mover para o banner do próximo filme
          </span>
          <SlArrowRight className={styles.right_icon} />
        </button>
      )}

      <div className={styles.radios_wrapper}>
        {movies.map((movie, index) => (
          <input
            checked={selected === index}
            key={`radio-${movie.id}`}
            value={index}
            type="radio"
            onChange={() => setSelected(index)}
            name="carousel-selection"
            className={styles.radio}
          />
        ))}
      </div>

      <ol className={styles.movie_list} ref={movieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              loading="lazy"
              className={styles.movie_image}
              alt={movie.title}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
