import React from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import Logo from "@/assets/PunmbraLogo.png";
import Image from "next/image";

const BigNav: React.FC = () => {
  return (
    <nav
      className={`${styles.bgColorNavbar} px-10 flex justify-between items-center bg-purple-950 py-4 min-h-[80px]`}
    >
      <div className="flex-shrink-0 ml-4">
        <Link href="/">
          <Image
            src={Logo}
            alt="Penumbra Logo"
            className="max-h-[70px] max-w-[70px]"
          />
        </Link>
      </div>
      <ul className={`flex space-x-8 text-pink-300 font-medium mx-auto`}>
        <li className={`${styles.navLink}`}>
          <Link
            href="/"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className={`${styles.navLink}`}>
          <Link
            href="/about"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Sobre Nosotros
          </Link>
        </li>
        <li className={`${styles.navLink}`}>
          <Link
            href="/blog"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Blog
          </Link>
        </li>
        <li className={`${styles.navLink}`}>
          <Link
            href="/journal"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Revista
          </Link>
        </li>
        <li className={`${styles.navLink}`}>
          <Link
            href="/podcasts"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Podcasts
          </Link>
        </li>
        <li className={`${styles.navLink}`}>
          <Link
            href="/contact"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BigNav;
