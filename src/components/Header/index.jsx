import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './style.module.css';
import PrimevideoLogo from '../PrimevideoLogo';
import TextLessButton from '../TextLessButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <PrimevideoLogo className={styles.primevideo_logo} />

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

          <TextLessButton
            textTip="Botão de busca"
            className={styles.search_button}
          >
            <BiSearch className={styles.search_icon} />
          </TextLessButton>
        </div>

        <button type="button" className={styles.language_button}>
          <BsGlobe2 className={styles.language_icon} />
          <span>PT</span>
        </button>

        <TextLessButton
          textTip="Botão de perfil"
          className={styles.profile_button}
        >
          <AiOutlineUser className={styles.profile_icon} />
        </TextLessButton>
      </div>
    </header>
  );
}
