import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importa los íconos de hamburguesa y cerrar
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import Logo from "@/assets/PunmbraLogo.png"
import Image from 'next/image';

const SmallNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Ícono de menú hamburguesa */}
      <button 
        onClick={toggleMenu} 
        className="text-pink-300 p-2 focus:outline-none"
        aria-label="Abrir menú"
      >
        <FiMenu size={24} />
      </button>

      {/* Menú deslizante */}
      <div className={`fixed top-0 left-0 w-full h-full bg-purple-950 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu} 
            className="text-pink-300 p-2 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8 text-pink-300 font-medium">
          <li className={`${styles.navLink}`}>
            <Link href="/" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={`${styles.navLink}`}>
            <Link href="/about" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Sobre Nosotros</Link>
          </li>
          <li className={`${styles.navLink}`}>
            <Link href="/blog" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className={`${styles.navLink}`}>
            <Link href="/journal" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Revista</Link>
          </li>
          <li className={`${styles.navLink}`}>
            <Link href="/podcasts" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Podcasts</Link>
          </li>
          <li className={`${styles.navLink}`}>
            <Link href="/contact" className="hover:text-pink-500 transition-colors duration-300" onClick={toggleMenu}>Contacto</Link>
          </li>
          <li>
            <Link href="/" onClick={toggleMenu}>
              <Image src={Logo} alt='Penumbra Logo' className="max-h-[70px] max-w-[70px]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallNav;