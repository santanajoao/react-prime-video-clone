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
        <a href="#">
          <span className="screen-readers-only">
            Voltar para a página inicial
          </span>
          <PrimevideoLogo className={styles.primevideo_logo} />
        </a>

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
              <button type="button" className={styles.nav_item_category}>
                Categorias
              </button>
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
            textTip="Pesquisar no primevideo"
            className={styles.search_button}
          >
            <BiSearch className={styles.search_icon} />
          </TextLessButton>
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
