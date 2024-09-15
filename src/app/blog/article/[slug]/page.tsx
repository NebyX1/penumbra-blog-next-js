import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSinglePost } from "@/api/hooks/getSinglePost.api";
import styles from "@/styles/postpage.module.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// Definimos la interfaz para los parámetros
interface Props {
  params: {
    slug: string;
  };
}

// Usamos generateMetadata para obtener la metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSinglePost(params.slug);
  const description = post.content.substring(0, 100);
  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      images: [post.image],
      url: `https://www.penumbra.press/blog/${params.slug}`,
    },
  };
}

// Componente que renderiza la página del post
const PostPage = async ({ params }: Props) => {
  const post = await getSinglePost(params.slug);

  if (!post) {
    return (
      <div className="text-center mt-5 text-red-500">
        Hemos tenido un error al cargar el post seleccionado o el post no
        existe...
      </div>
    );
  }

  const { author, title, content, date, image } = post;
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <>
      <article className="bg-light">
        <div className="container mx-auto px-5 py-5">
          <div className="pt-5">
            <Link href="/blog">
              <Button
                variant="ghost"
                className="mb-10 border border-violet-800 py-2 px-6 font-light text-violet-800 hover:bg-violet-800 hover:text-white transition-colors duration-300"
              >
                VOLVER
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Card className="mb-4 shadow-lg bg-transparent overflow-hidden rounded-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3">
                    <Image
                      src={image}
                      alt={title}
                      width={500} // Ajusta el ancho según tus necesidades
                      height={300} // Ajusta la altura según tus necesidades
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <CardHeader className="p-4">
                      <CardTitle className="text-primary">{author}</CardTitle>
                      <div className="pl-4">
                        <CardDescription className="text-violet-500 mb-2">
                          {formattedDate}
                        </CardDescription>
                        <CardContent className="p-0 text-violet-500 text-lg font-bold">
                          <h4>{title}</h4>
                          <h4>Por: {author}</h4>
                        </CardContent>
                      </div>
                    </CardHeader>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-5/6 lg:w-3/4">
              <article className="p-4 shadow-lg">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className={`${styles.content} text-violet-400`}
                >
                  {content}
                </ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostPage;
