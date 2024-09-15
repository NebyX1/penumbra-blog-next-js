import React from 'react';
import { Metadata } from 'next';
import JournalsRender from './JournalsRender'; // Importamos el componente cliente
import styles from '@/styles/journal.module.css';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Revista - Penumbra',
  description: 'No hay nada mágico en los libros en sí, la magia está en lo que dicen los libros.',
  openGraph: {
    title: 'Revista - Penumbra',
    description: 'No hay nada mágico en los libros en sí, la magia está en lo que dicen los libros.',
    images: ['https://i.ibb.co/zNj95Q8/journal-head.webp'],
    url: 'https://www.penumbra.press/journal',
  },
};

const Journal: React.FC = () => {
  const image = 'https://i.ibb.co/zNj95Q8/journal-head.webp';

  return (
    <>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay}>
          <h1 className={`${styles['header-text']} text-white text-4xl font-bold`}>
            Miran, pero no ven...
          </h1>
        </div>
      </div>

      {/* Sección de Contenido del Journal */}
      <section className="bg-gray-900 p-5 py-20">
        {/* Cargamos el componente cliente */}
        <JournalsRender />
      </section>
    </>
  );
};

export default Journal;
