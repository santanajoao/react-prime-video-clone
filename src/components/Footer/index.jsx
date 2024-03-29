import React from 'react';
import PrimevideoLogo from '../PrimevideoLogo';
import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <PrimevideoLogo className={styles.logo} />
      <div className={styles.nav_and_copyright}>
        <nav>
          <ul className={styles.ancor_list}>
            <li>
              <a href="#link-para-os-termos">Termos e aviso de privacidade</a>
            </li>
            <li>
              <a href="#link-para-feedback">Enviar feedback</a>
            </li>
            <li>
              <a href="#link-para-ajuda">Ajuda</a>
            </li>
          </ul>
        </nav>

        <small className={styles.copyright}>
          &copy;
          <span aria-hidden="true">1996-2023</span>
          &nbsp;
          <span className="screen-readers-only"> de 1996 a 2023</span>
          Amazon.com, Inc. ou suas afiliadas
        </small>
      </div>
    </footer>
  );
}
