import React from 'react';
import styles from '@/styles/about.module.css';
import { Metadata } from 'next';

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: 'Sobre Nosotros - Penumbra',
  description: 'Hágase la luz.',
  openGraph: {
    title: 'Sobre Nosotros - Penumbra',
    description: 'Hágase la luz.',
    images: ['https://i.ibb.co/stXWSMr/about-head.webp'],
    url: 'https://www.penumbra.press/about',
  },
};

const About: React.FC = () => {
  const image = 'https://i.ibb.co/stXWSMr/about-head.webp';

  return (
    <>
      <div
        className={`${styles['position-relative']} ${styles['cover-background']} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${styles.overlay}`}>
          <h1 className={`${styles['header-text']} text-white text-4xl font-bold`}>
            La noche es oscura...
          </h1>
        </div>
      </div>

      <div className="p-5 bg-dark text-violet-400">
        <div className="container mx-auto my-5">
          <div className="mb-8">
            <h2 className="text-4xl text-violet-800 font-bold mb-4">
              Somos el equipo de Penumbra
            </h2>
            <p className="text-lg mb-6">
              Nacimos con el objetivo de molestar, perturbar y generar incomodidad. En Penumbra, queremos darle lugar a todas las voces y opiniones divergentes, y hablar de todos los temas que se nos vengan en gana, sin ataduras, mordazas o impedimentos de ningún tipo. Creemos en la importancia de un diálogo abierto y sin restricciones, donde todas las perspectivas, incluso las más incómodas, tengan su espacio.
            </p>

            <h2 className="text-4xl text-violet-800 font-bold mb-4">Visión</h2>
            <p className="text-lg mb-6">
              Nuestra visión es ser la plataforma de opiniones divergentes más molesta y provocadora de todas. Queremos ser reconocidos como un espacio donde las ideas disruptivas y críticas florezcan, desafiando las narrativas dominantes y cuestionando las estructuras de poder establecidas. En Penumbra, encontrarás artículos de opinión dentro de las humanidades, ciencias sociales y futurología, que dejarán mucho de qué hablar y reflexionar.
            </p>

            <h2 className="text-4xl text-violet-800 font-bold mb-4">Misión</h2>
            <p className="text-lg mb-6">
              Nuestra misión es proporcionar un espacio seguro y respetuoso para la libre expresión, donde se fomente el pensamiento crítico y se promueva la diversidad de ideas. Queremos ser la voz de los pensadores críticos con el sistema, ofreciendo un espacio para reflexiones científicas y disruptivas que normalmente son excluidas de otros lugares. Buscamos moldear el futuro del pensamiento crítico libre y molesto, que tiene la libertad suficiente para romper con lo establecido y orientarnos hacia un mejor lugar.
            </p>

            <h2 className="text-4xl text-violet-800 font-bold mb-4">Objetivos</h2>
            <ul className="list-disc pl-6 text-lg mb-6">
              <li className="mb-2">
                Molestar al poder: Queremos desafiar los mecanismos de censura explícitos o implícitos, donde el poder intenta silenciar las voces que no le convienen. Nuestro objetivo es ser una espina constante para aquellos que buscan mantener el status quo.
              </li>
              <li className="mb-2">
                Fomentar el pensamiento crítico: Promovemos la reflexión crítica sobre temas como el transhumanismo, la inteligencia artificial y la neoespiritualidad. Buscamos educar y despertar la curiosidad en nuestros lectores sobre estos temas fundamentales para el futuro.
              </li>
              <li className="mb-2">
                Crear un espacio inclusivo para todas las voces: En Penumbra, todas las opiniones tienen cabida, siempre dentro de un marco de respeto y objetividad absolutos. Queremos ser un faro para aquellos que se sienten excluidos o silenciados en otros espacios.
              </li>
              <li className="mb-2">
                Difundir la literatura reflexiva y disruptiva: Aceptamos y promovemos la poesía reflexiva sobre temas existenciales complejos, así como piezas de literatura como cuentos, relatos y narrativa breve. Queremos dar voz a las expresiones artísticas que inviten a la reflexión y al cuestionamiento.
              </li>
              <li className="mb-2">
                Debatir temas de actualidad e importancia: A través de nuestro blog, revista tri-anual y podcasts, discutimos temas relevantes para nuestro país y para el futuro de la humanidad. Queremos ser una plataforma donde se generen debates constructivos y se planteen soluciones innovadoras a los problemas actuales.
              </li>
            </ul>

            <h2 className="text-4xl text-violet-800 font-bold mb-4">Invitación</h2>
            <p className="text-lg mb-6">
              Dicho esto, te invitamos a que pases un buen rato leyendo nuestro blog, nuestra revista tri-anual o escuchando nuestros podcasts, donde debatimos temas de momento e importancia para nuestro país y para el futuro de la humanidad. En Penumbra, creemos que la incomodidad es el primer paso hacia el cambio y la transformación. Únete a nosotros en este viaje de exploración intelectual y crítica constructiva.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
