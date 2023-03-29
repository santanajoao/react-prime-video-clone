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
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
}
