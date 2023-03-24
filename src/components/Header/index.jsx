import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import primeVideoLogo from '../../assets/prime-video-logo.svg';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <img
          src={primeVideoLogo}
          className={styles.primevideo_logo}
          alt="Logo do primevideo"
        />
        <nav className={styles.nav}>
          <ul className={styles.links_list}>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Loja</a>
            </li>
            <li>
              <a href="#">Canais</a>
            </li>
            <li>
              <span className={styles.nav_item_category}>Categorias</span>
            </li>
            <li>
              <a href="#">Minha área</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.header_right}>
        <div className={styles.search_wrapper}>
          <a href="#" className={styles.free_trial_ancor}>
            Experimente grátis
          </a>

          <button type="button" className={styles.search_button}>
            <BiSearch className={styles.search_icon} />
          </button>
        </div>

        <button type="button" className={styles.language_button}>
          <BsGlobe2 className={styles.language_icon} />
          <span>PT</span>
        </button>

        <button type="button" className={styles.profile_button}>
          <AiOutlineUser className={styles.profile_icon} />
        </button>
      </div>
    </header>
  );
}
