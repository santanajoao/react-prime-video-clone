import React, { useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import useIndexSelection from '../../hooks/useIndexSelection';
import { fetchPopularMovies } from '../../services/movies';
import styles from './style.module.css';

// componentizar os elementos
const NUMBER_OF_MOVIES_DISPLAYED = 10;

export default function MovieBannerCarousel() {
  const [movies, setMovies] = useState([]);
  const { selected, setSelected, selectNext, selectPrevious } =
    useIndexSelection(0, NUMBER_OF_MOVIES_DISPLAYED);

  async function getPopularMovies() {
    const movies = await fetchPopularMovies();
    const nFirstMostPopular = movies.splice(0, NUMBER_OF_MOVIES_DISPLAYED);
    setMovies(nFirstMostPopular);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  if (movies.length === 0) {
    return null;
  }

  const carouselMargin = `-${selected * 100}%`;
  const firstIsNotSelected = selected !== 0;
  const lastIsNotSelected = selected !== NUMBER_OF_MOVIES_DISPLAYED - 1;

  return (
    <div className={styles.carousel}>
      {firstIsNotSelected && (
        <button onClick={selectPrevious} className={styles.left_button}>
          <SlArrowLeft className={styles.left_icon} />
        </button>
      )}

      {lastIsNotSelected && (
        <button onClick={selectNext} className={styles.right_button}>
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

      <ol className={styles.movie_list}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              style={{ marginLeft: carouselMargin }}
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
