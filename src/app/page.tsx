import React from 'react';
import InstagramFeed from '@/components/other/InstagramFeed';
import LatestPosts from '@/components/other/LatestPosts';
import styles from '@/styles/home.module.css';
import { Metadata } from 'next';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Home - Penumbra',
  description: 'Somos Penumbra, el blog/revista que busca generar polémica y perturbaciones a la corrección política.',
  openGraph: {
    title: 'Home - Penumbra',
    description: 'Somos Penumbra, el blog/revista que busca generar polémica y perturbaciones a la corrección política.',
    images: ['https://i.ibb.co/px4B2CP/home-head.webp'],
    url: 'https://www.penumbra.press',
  },
};

const Home: React.FC = () => {
  const image = 'https://i.ibb.co/px4B2CP/home-head.webp';

  return (
    <>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay}>
          <h1 className={`${styles['header-text']}`}>
            Bienvenidos a Penumbra
          </h1>
        </div>
      </div>

      {/* Sección de Últimos Posts */}
      <section className="bg-gray-900 text-center p-5 pt-20">
        <h1 className="text-violet-800 text-2xl mb-10">Últimos Posts</h1>
        <LatestPosts />
      </section>

      {/* Sección de Instagram Feed */}
      <section className="bg-gray-900 text-center p-5 py-20">
        <h1 className="text-violet-800 text-2xl mb-10">Algo para mirar...</h1>
        <div className="container mx-auto mt-5 flex justify-center">
          <InstagramFeed />
        </div>
      </section>
    </>
  );
};

export default Home;
