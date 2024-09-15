import React from 'react';
import { Metadata } from 'next';
import BlogContent from './BlogContent';
import styles from '@/styles/blogpage.module.css';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Blog - Penumbra',
  description: 'Nuestra República y su prensa caerán o se elevarán juntas.',
  openGraph: {
    title: 'Blog - Penumbra',
    description: 'Nuestra República y su prensa caerán o se elevarán juntas.',
    images: ['https://i.ibb.co/3dcF2YC/blog-head.webp'],
    url: 'https://www.penumbra.press/blog',
  },
};

const Blog: React.FC = () => {
  const image = 'https://i.ibb.co/3dcF2YC/blog-head.webp';

  return (
    <>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay}>
          <h1 className={`${styles['header-text']} text-white text-4xl font-bold`}>
            Opiniones sin compromisos
          </h1>
        </div>
      </div>

      {/* Sección de Contenido del Blog */}
      <section className="bg-gray-900 p-5 py-20">
        {/* Cargamos el componente cliente */}
        <BlogContent />
      </section>
    </>
  );
};

export default Blog;
