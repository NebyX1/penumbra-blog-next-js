import React from 'react';
import styles from '@/styles/podcasts.module.css';
import YoutubeFeed from '@/components/other/YoutubeFeed';
import { Metadata } from 'next';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Podcasts - Penumbra',
  description:
    'Notas, entrevistas, polémica, lo tenemos todo para perturbar el orden natural de las cosas, queremos molestar.',
  openGraph: {
    title: 'Podcasts - Penumbra',
    description:
      'Notas, entrevistas, polémica, lo tenemos todo para perturbar el orden natural de las cosas, queremos molestar.',
    images: ['https://i.ibb.co/rbM0HdM/podcasts-head.webp'],
    url: 'https://www.penumbra.press/podcasts',
  },
};

const Podcasts: React.FC = () => {
  const image = 'https://i.ibb.co/rbM0HdM/podcasts-head.webp';

  return (
    <>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay}>
          <h1 className={`${styles['header-text']} text-white text-4xl font-bold`}>
            Nada que escuchar...
          </h1>
        </div>
      </div>

      {/* Sección de Contenido de los Podcasts */}
      <div className="bg-gray-900 p-5 text-center">
        <YoutubeFeed />
      </div>
    </>
  );
};

export default Podcasts;
