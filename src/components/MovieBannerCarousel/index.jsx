import React, { useEffect, useState } from 'react';
import useIndexSelection from '../../hooks/useIndexSelection';
import { fetchPopularMovies } from '../../services/movies';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import LabelAndRadio from '../LabelAndRadio';
import styles from './style.module.css';
import TextLessButton from '../TextLessButton';

// componentizar os elementos
const MIN_SELECTION = 0;
const NUMBER_OF_MOVIES_DISPLAYED = 10;

export default function MovieBannerCarousel() {
  const [movies, setMovies] = useState([]);
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

  if (movies.length === 0) {
    return null;
  }

  const firstIsNotSelected = selected !== MIN_SELECTION;
  const lastIsNotSelected = selected !== NUMBER_OF_MOVIES_DISPLAYED - 1;
  const movieStyle = `translate(-${selected * 100}%)`;

  return (
    <div className={styles.carousel}>
      {firstIsNotSelected && (
        <TextLessButton
          textTip="Mover para banner do filme anterior"
          onClick={selectPrevious}
          className={styles.left_button}
        >
          <SlArrowLeft className={styles.left_icon} />
        </TextLessButton>
      )}

      {lastIsNotSelected && (
        <TextLessButton
          textTip="Mover para o banner do próximo filme"
          onClick={selectNext}
          className={styles.right_button}
        >
          <SlArrowRight className={styles.right_icon} />
        </TextLessButton>
      )}

      <div className={styles.radios_wrapper}>
        {movies.map((_, index) => (
          <LabelAndRadio
            key={`label-radio-${index}`}
            value={index}
            onChange={() => setSelected(index)}
            name="carousel-selection"
            label={`Selecionar o ${index + 1}° banner de filme`}
            id={`radio-${index}`}
            className={styles.radio}
            checked={selected === index}
          />
        ))}
      </div>

      <ol className={styles.movie_list}>
        {movies.map((movie) => (
          <li key={movie.id} style={{ transform: movieStyle }}>
            <a href="#">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                className={styles.movie_image}
                alt={movie.title}
              />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
