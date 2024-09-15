import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "@/styles/postcard.module.css";
import Image from "next/image";

interface Journal {
  image: string;
  title: string;
  number: number;
  year: number;
  date: string;
  url: string;
}

interface JournalCardProps {
  journal: Journal;
}

const JournalCard: React.FC<JournalCardProps> = ({ journal }) => {
  return (
    <Card
      className={`mb-4 shadow-lg ${styles.transparentBackground} border-none`}
    >
      {/* Imagen con bordes superiores redondeados */}
      <div className={`relative h-64 ${styles.customBgImage}`}>
        <Image
          src={journal.image}
          alt={journal.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className={styles.customTextViolet}>
          {journal.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className={`${styles.customTextViolet} mb-1`}>
          <strong>Número:</strong> {journal.number}
        </CardDescription>
        <CardDescription className={`${styles.customTextViolet} mb-1`}>
          <strong>Año:</strong> {journal.year}
        </CardDescription>
        <CardDescription className={`${styles.customTextViolet} mb-4`}>
          <strong>Fecha:</strong> {new Date(journal.date).toLocaleDateString()}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4">
        <a
          href={journal.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customTextViolet}
        >
          <Button variant="ghost" className={styles.customButton}>
            Descargar
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default JournalCard;
