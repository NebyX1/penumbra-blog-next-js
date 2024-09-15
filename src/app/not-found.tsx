import React from "react";
import styles from "@/styles/contact.module.css";
import { Metadata } from "next";
import { buttonVariants } from '@/components/ui/button';
import Link from "next/link";

// Definimos la metadata de la página usando Next.js
export const metadata: Metadata = {
  title: "No Encontrado - Penumbra",
  description:
    "Pobrecilla criatura, se ha perdido en la oscuridad de este mundo cruel...",
  openGraph: {
    title: "No Encontrado - Penumbra",
    description:
      "Pobrecilla criatura, se ha perdido en la oscuridad de este mundo cruel...",
    images: ["https://i.ibb.co/w7WXjDL/404-head.webp"],
    url: "https://www.penumbra.press/not-found",
  },
};

const image = "https://i.ibb.co/w7WXjDL/404-head.webp";

const NotFound = () => {
  return (
    <>
      <div
        className={`${styles["position-relative"]} ${styles["cover-background"]} bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${styles.overlay}`}>
          <h1
            className={`${styles["header-text"]} text-white text-8xl font-bold`}
          >
            Parce que te has perdido en la oscuridad...
          </h1>
        </div>
      </div>
      <div>
        <div className="text-center pb-20">
          <h1 className="text-violet-800 text-center text-4xl p-28">Página no encontrada</h1>
          <Link href="/">
            <span
              className={`${buttonVariants({ variant: 'ghost' })} border text-violet-800 border-violet-800 py-2 px-6 font-light ${styles['hover-bg-violet-800']} ${styles['hover-text-white']}`}
            >
              Volver al Inicio
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
