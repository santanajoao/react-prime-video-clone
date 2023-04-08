import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import styles from './style.module.css';
import TextLessButton from '../../TextLessButton';

export default function MovieCard({
  image,
  title,
  description,
  releaseYear,
  onFocus,
}) {
  return (
    <a href="#" onFocus={onFocus} className={styles.movie_ancor}>
      <div className={styles.movie_card}>
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
    </a>
  );
}
