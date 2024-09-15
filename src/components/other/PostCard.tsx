import React from "react";
import Link from "next/link";
import styles from "@/styles/postcard.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  image: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  category?: string;
  summary: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card
      className={`mb-4 ${styles.cardShadow} ${styles.transparentBackground} border-none`}
    >
      <div className={`relative h-64 ${styles.customBgImage}`}>
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className={styles.customTextViolet}>
          <Link href={`/blog/article/${post.slug}`} className={styles.hoverUnderline}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className={`${styles.customTextViolet} mb-1`}>
          <strong>Autor:</strong> {post.author}
        </CardDescription>
        <CardDescription className={`${styles.customTextViolet} mb-1`}>
          <strong>Fecha:</strong> {new Date(post.date).toLocaleDateString()}
        </CardDescription>
        <CardDescription className={`${styles.customTextViolet} mb-2`}>
          <strong>Categorías:</strong>{" "}
          {post.category ? post.category : "No categories"}
        </CardDescription>
        <CardDescription className={`${styles.customTextViolet} mb-4`}>
          {post.summary}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4">
        <Link href={`/blog/article/${post.slug}`} className={styles.customTextViolet}>
          <Button variant="ghost" className={styles.customButton}>
            Leer Artículo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
