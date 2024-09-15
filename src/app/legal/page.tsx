import React from 'react';
import { Metadata } from 'next';
import styles from '@/styles/podcasts.module.css';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Legal - Penumbra',
  description:
    'Obligatio est iuris vinculum',
  openGraph: {
    title: 'Legal - Penumbra',
    description:
      'Obligatio est iuris vinculum',
    images: ['https://i.ibb.co/17Ws3Sq/legal-head.webp'],
    url: 'https://www.penumbra.press/legal',
  },
};

const LegalPage: React.FC = () => {

  const image = 'https://i.ibb.co/17Ws3Sq/legal-head.webp';

  return (
    <>
    {/* Sección de Encabezado con Imagen de Fondo */}
    <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay}>
          <h1 className={`${styles['header-text']} text-white text-4xl font-bold`}>
            La ley es dura, pero es justa
          </h1>
        </div>
      </div>

    <div className="container mx-auto text-violet-400 p-5 py-20">
      {/* Sección de Privacidad y Aviso Legal */}
      <h2 className="text-4xl text-violet-800 mb-4">Privacidad y Aviso Legal</h2>
      <p className="mb-6 text-lg">
        En Penumbra, valoramos tu privacidad y nos comprometemos a protegerla. No recogemos cookies ni guardamos datos de ningún tipo sobre los usuarios del sitio, salvo aquellos que los autores de los artículos deben proporcionar para ser publicados. Los artículos pueden ser enviados y publicados bajo seudónimo.
      </p>
      <p className="mb-6 text-lg">
        Todo el contenido enviado y publicado en Penumbra es de dominio público y está amparado por la licencia Creative Commons más abierta, permitiendo copiar, utilizar para cualquier propósito, incluso fines económicos, siempre y cuando se reconozcan los derechos de autor. Nuestro objetivo es que el conocimiento sea libre y sin restricciones de ningún tipo.
      </p>
      <p className="mb-6 text-lg">
        No nos hacemos responsables de ninguna opinión de los autores de los artículos. Aunque somos un portal de libre expresión absoluta, nos negamos a publicar contenido que, sin pruebas claras, pueda perjudicar a alguien o a su honor de cualquier forma. Aceptamos cualquier tipo de argumento sobre cualquier tema, siempre que se presente con respeto y no busque causar daño a personas o entidades.
      </p>

      {/* Sección de Contenido y Licencia */}
      <h2 className="text-4xl text-violet-800 mb-4">Contenido y Licencia</h2>
      <p className="mb-6 text-lg">
        Todos los artículos y materiales publicados en Penumbra se encuentran bajo la licencia Creative Commons Attribution 4.0 International (CC BY 4.0). Esto significa que eres libre de:
      </p>
      <ul className="list-disc list-inside mb-6 text-lg">
        <li>Compartir: copiar y redistribuir el material en cualquier medio o formato.</li>
        <li>Adaptar: remezclar, transformar y construir a partir del material para cualquier propósito, incluso comercialmente.</li>
        <li>Reconocimiento: Debes otorgar el crédito adecuado, proporcionar un enlace a la licencia, e indicar si se han realizado cambios. Puedes hacerlo de cualquier manera razonable, pero no de forma que sugiera que tienes el apoyo del licenciante o lo recibes por el uso que haces.</li>
      </ul>

      {/* Sección de Responsabilidad */}
      <h2 className="text-4xl text-violet-800 mb-4">Responsabilidad</h2>
      <p className="mb-6 text-lg">
        Penumbra no se hace responsable del contenido de los artículos y opiniones expresadas por los autores. Nos reservamos el derecho de retirar cualquier contenido que consideremos inapropiado, ofensivo o que no cumpla con nuestras políticas de respeto y no daño.
      </p>

      {/* Sección de Contacto */}
      <h2 className="text-4xl text-violet-800 mb-4">Contacto</h2>
      <p className='text-lg'>
        Si tienes alguna pregunta sobre estas políticas o necesitas más información, no dudes en ponerte en contacto con nosotros a través de <a href="mailto:info@penumbra.press" className="text-blue-400 hover:text-blue-600">info@penumbra.press</a>.
      </p>
    </div>
    </>
  );
};

export default LegalPage;
