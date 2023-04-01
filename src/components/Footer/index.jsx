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
              <a href="#">Termos e aviso de privacidade</a>
            </li>
            <li>
              <a href="#">Enviar feedback</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </nav>

        <small className={styles.copyright}>
          &copy; 1996-2023, Amazon.com, Inc. ou suas afiliadas
        </small>
      </div>
    </footer>
  );
}