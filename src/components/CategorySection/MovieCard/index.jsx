import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';
import TextLessButton from '../../TextLessButton';
import styles from './style.module.css';

export default function MovieCard({
  description,
  image,
  onFocus,
  releaseYear,
  title,
}) {
  return (
    <div className={styles.movie_card}>
      <a href="#link-to-movie" onFocus={onFocus} className={styles.movie_ancor}>
        <div className={styles.tag_wrapper}>
          <div className={styles.prime_tag}>
            <span aria-hidden="true">prime</span>
          </div>
        </div>

        <img
          src={image}
          loading="lazy"
          className={styles.movie_banner}
          alt={title}
        />
      </a>
      <div className={styles.card_bottom}>
        <div className={styles.card_interactions}>
          <button type="button" className={styles.button_ancor}>
            Assistir com o prime
          </button>

          <TextLessButton
            title="Adicionar aos favoritos"
            className={styles.favorite_button}
            textTip="Adicionar -nome- aos favoritos"
          >
            <IoMdAdd />
          </TextLessButton>
        </div>

        <div>
          <h2 className={styles.card_title}>{title}</h2>
          <p className={styles.card_description}>{description}</p>

          <span className={styles.year}>{releaseYear}</span>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  releaseYear: PropTypes.string,
  title: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  onFocus: null,
  releaseYear: null,
};
