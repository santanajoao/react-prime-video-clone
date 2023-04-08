import React from 'react';
import PropTypes from 'prop-types';
import primeTextLogo from '../../../assets/prime-text-logo.png';
import styles from './style.module.css';

export default function CategoryHeader({ category }) {
  return (
    <header className={styles.header}>
      <img
        src={primeTextLogo}
        className={styles.prime_logo}
        alt="Incluído no prime"
      />

      <h2 className={styles.category_title}>{category}</h2>

      <a
        href="#link-para-os-filmes-da-categoria"
        className={styles.category_ancor}
      >
        Veja mais
      </a>
    </header>
  );
}

CategoryHeader.propTypes = {
  category: PropTypes.string.isRequired,
};
