"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import styles from "@/styles/youtubefeed.module.css";

const YoutubeFeed: React.FC = () => {
  return (
    <section className={`${styles.youtubeSection} text-center py-10`}>
      <div className="container mx-auto">
        <h2 className="text-4xl text-blue-500 font-bold mb-4">
          Visita Nuestro Canal de YouTube
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          ¡Explora nuestros últimos podcasts, suscríbete y mantente al día con
          nuestras actualizaciones!
        </p>
        <a
          href="https://www.youtube.com/channel/UCgU_KPMHVjEItMC5VzgJuZw"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonVariants({
            variant: "ghost",
          })} border border-violet-800 py-2 px-6 font-light text-violet-800 hover:bg-violet-800 hover:text-white transition-colors duration-300`}
        >
          Ir al Canal de YouTube
        </a>
      </div>
    </section>
  );
};

export default YoutubeFeed;
