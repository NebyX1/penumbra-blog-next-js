import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-center py-6 text-pink-300">
      {/* Enlace de Aviso Legal */}
      <div className="mb-4">
        <Link href="/legal" className="hover:text-pink-500 transition-colors duration-300">
          Aviso Legal
        </Link>
      </div>

      {/* Iconos de Redes Sociales */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.facebook.com/people/Penumbra-Blog/61561278842759/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors duration-300">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.instagram.com/penumbra_x_/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400 transition-colors duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.youtube.com/channel/UCgU_KPMHVjEItMC5VzgJuZw" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-400 transition-colors duration-300">
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Texto de Copyright */}
      <div className="text-sm">
        © 2024 Copyright: <span className="text-purple-400 font-semibold">Penumbra</span>
      </div>
    </footer>
  );
};

export default Footer;
