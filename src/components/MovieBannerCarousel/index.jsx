import React, { useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './style.module.css';

const numberOfMoviesDisplayed = 10;

export default function MovieBannerCarousel() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(0);

  async function getPopularMovies() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=8427e7de4210382e41fa0812d7eaf4c7&language=pt-BR&region=BR&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate',
    );
    const { results } = await response.json();
    const nFirstMostPopular = results.splice(0, numberOfMoviesDisplayed);
    setMovies(nFirstMostPopular);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  if (movies.length === 0) {
    return null;
  }

  const carouselMargin = `-${selected * 100}%`;

  return (
    <div className={styles.carousel}>
      <button
        onClick={() => setSelected(selected && selected - 1)}
        className={styles.left_button}
      >
        <SlArrowLeft className={styles.left_icon} />
      </button>
      <button
        onClick={() => setSelected(selected < 9 ? selected + 1 : selected)}
        className={styles.right_button}
      >
        <SlArrowRight className={styles.right_icon} />
      </button>

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
