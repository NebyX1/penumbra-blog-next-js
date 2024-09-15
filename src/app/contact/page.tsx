import React from 'react';
import styles from '@/styles/contact.module.css';
import { buttonVariants } from '@/components/ui/button';
import { Metadata } from 'next';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Contacto - Penumbra',
  description: 'Nadie debería estar solo en su vejez, pensó. Pero es inevitable.',
  openGraph: {
    title: 'Contacto - Penumbra',
    description: 'Nadie debería estar solo en su vejez, pensó. Pero es inevitable.',
    images: ['https://i.ibb.co/3SZ0McH/contact-head.webp'],
    url: 'https://www.penumbra.press/contact',
  },
};

const Contact: React.FC = () => {
  const image = 'https://i.ibb.co/3SZ0McH/contact-head.webp';

  return (
    <>
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${styles.overlay}`}>
          <h1 className={`${styles['header-text']} text-white text-8xl font-bold`}>
            Habrá respuesta... tal vez...
          </h1>
        </div>
      </div>

      {/* Sección de Pautas para Publicar */}
      <div className="text-violet-400 pb-10 pt-10 mx-auto container px-4 md:px-4">
        <h2 className="text-4xl text-violet-800 mb-6 text-center">Pautas para Publicar un Artículo</h2>
        <p className="mb-4 text-lg">
          Los artículos pueden tener entre 800 y 1200 palabras. La temática es libre, incluyendo cuentos, poesía, y narrativa, siempre y cuando sean críticos de una situación social, económica o política, o aborden temáticas futuristas o innovadoras. Se debe redactar con respeto, buscando generar polémica pero sin dañar a nadie.
        </p>
        <p className="mb-4 text-lg">
          No se aceptan artículos con mala ortografía o aquellos que ataquen violentamente a una persona, institución, religión o filosofía. Se admiten críticas de todo tipo sobre cualquiera de estos puntos, pero con respeto y pruebas argumentales creíbles.
        </p>
        <p className="mb-4 text-lg">
          Los artículos enviados a la revista pueden ser de entre 800 y 5000 palabras. En el caso de artículos científicos, se debe aportar con estructura académica adecuada y sistema de referencia Harvard. Las obras literarias pueden publicarse bajo seudónimo, y los ensayos deben tener estructura debidamente académica.
        </p>
        <p className="mb-4 text-lg">
          Penumbra no está obligada a publicar todo lo que se le envíe. Habrá un comité académico que decidirá qué se publica y qué no, sin necesidad de justificar sus decisiones.
        </p>
        <p className="mb-4 text-lg">
          Las publicaciones no tienen costos para el autor, pero tampoco se remunera por las publicaciones. Los autores tienen la opción de que publicitemos sus artículos en nuestras redes sociales, consultando por privado los costos de ello.
        </p>
        <p className="mb-4 text-lg">
          Para protegernos legalmente, no aceptamos responsabilidad por las opiniones expresadas por los autores. Nos reservamos el derecho de retirar contenido inapropiado, ofensivo, o que no cumpla con nuestras políticas de respeto y no daño.
        </p>
      </div>

      {/* Sección de Contacto */}
      <div className="bg-dark text-violet-800 py-20">
        <div className="container mx-auto p-2">
          <div className="text-center">
            <h2 className="text-2xl font-light p-5">
              ¿Querés enviar un artículo o simplemente descargar tu ira con nosotros?
            </h2>
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-left justify-between">
            <div className="p-5 -mb-4 md:mb-0 pb-4 md:pb-0 md:border-r border-b border-violet-800 md:border-b-0">
              <h2 className="text-lg font-light mb-2">LLÁMANOS:</h2>
              <p className="text-2xl font-bold">(+598) 95975766</p>
            </div>
            <div className="p-5 mb-4 md:mb-0 pb-4 md:pb-0 md:border-r border-b border-violet-800 md:border-b-0">
              <h2 className="text-lg font-light mb-2">ENVÍANOS UN MAIL:</h2>
              <p className="text-2xl font-bold">info@penumbra.press</p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="mailto:info@penumbra.press"
                className={`${buttonVariants({ variant: 'ghost' })} border border-violet-800 py-2 px-6 font-light ${styles['hover-bg-violet-800']} ${styles['hover-text-white']}`}
              >
                ENVIAR MAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
