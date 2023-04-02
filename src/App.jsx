import React from 'react';
import CategorySection from './components/CategorySection';
import Header from './components/Header';
import MovieBannerCarousel from './components/MovieBannerCarousel';
import styles from './App.module.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <MovieBannerCarousel />
        <section className={styles.carousels_wrapper}>
          <CategorySection title="Filmes para toda a família" genre="family" />
          <CategorySection title="Filmes de ação" genre="action" />
          <CategorySection title="Filmes de terror" genre="horror" />
          <CategorySection title="Filmes de comédia" genre="comedy" />
          <CategorySection title="Filmes de guerra" genre="war" />
          <CategorySection title="Filmes de animação" genre="animation" />
          <CategorySection title="Filmes de fantasia" genre="fantasy" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
