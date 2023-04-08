/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import PrimevideoLogo from '../PrimevideoLogo';
import TextLessButton from '../TextLessButton';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <a href="#link-home">
          <span className="screen-readers-only">
            Voltar para a página inicial
          </span>
          <PrimevideoLogo className={styles.primevideo_logo} />
        </a>

        <nav className={styles.nav}>
          <ul className={styles.links_list}>
            <li>
              <a href="#link-home">Início</a>
            </li>
            <li>
              <a href="#link-loja">Loja</a>
            </li>
            <li>
              <a href="#link-canais">Canais</a>
            </li>
            <li>
              <button type="button" className={styles.nav_item_category}>
                Categorias
              </button>
            </li>
            <li>
              <a href="#link-minha-area">Minha área</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.header_right}>
        <div className={styles.search_wrapper}>
          <a href="#link-experimente" className={styles.free_trial_ancor}>
            Experimente grátis
          </a>

          <div className={styles.search_input_wrapper}>
            <input
              type="text"
              required
              id="search-input"
              className={styles.search_input}
            />
            <label htmlFor="search-input" className={styles.search_input_label}>
              Busca
            </label>
          </div>

          <BiSearch className={styles.search_icon} />
        </div>

        <TextLessButton
          textTip="Selecionar linguagem. Linguagem selecionada:"
          className={styles.language_button}
        >
          <BsGlobe2 className={styles.language_icon} />
          <span>PT</span>
        </TextLessButton>

        <TextLessButton
          textTip="Abrir opções de perfil"
          className={styles.profile_button}
        >
          <AiOutlineUser className={styles.profile_icon} />
        </TextLessButton>
      </div>
    </header>
  );
}
