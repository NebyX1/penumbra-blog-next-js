'use client';

import React, { useState, useEffect } from 'react';
import PostCard from '@/components/other/PostCard';
import { getPosts } from '@/api/hooks/getPosts.api'; // Importa la función para obtener los posts

const LatestPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Estado para almacenar los posts
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  // Manejo de la solicitud de datos con useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Llama a la función para obtener los posts
        setPosts(data); // Establece los datos recibidos
      } catch (err) {
        setError('Hemos tenido un error al cargar los posts...'); // Maneja el error
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    fetchPosts(); // Ejecuta la solicitud al montar el componente
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-red-500">
        Hemos tenido un error al cargar los posts...
      </div>
    );
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="col-span-1">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
