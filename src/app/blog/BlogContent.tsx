'use client'

import React, { useState, useEffect } from 'react';
import PostCard from '@/components/other/PostCard';
import ReactPaginate from 'react-paginate';
import { getPosts } from '@/api/hooks/getPosts.api'; // Importa la función para obtener los posts
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  import { Post } from '@/types';

const BlogContent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    return <div className="text-center mt-5">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">{error}</div>;
  }

  // Obtener categorías únicas
  const categories = ['all', ...Array.from(new Set(posts.map((post: Post) => post.category)))];

  // Filtrar posts según la categoría seleccionada
  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter((post: Post) => post.category === selectedCategory);

  const postsPerPage = 3;
  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(0); // Resetear a la primera página cuando se cambia la categoría
  };

  return (
    <div className="container mx-auto">
      {/* Filtro de categorías */}
      <div className="flex justify-center mb-4 text-violet-800">
        <Select onValueChange={handleCategoryChange} value={selectedCategory}>
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorías</SelectLabel>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'Todas las Categorías' : category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Listado de Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {currentPosts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex space-x-2"
          pageLinkClassName="px-3 py-1 border rounded"
          previousLinkClassName="px-3 py-2 text-violet-800 border rounded"
          nextLinkClassName="px-3 py-2 text-violet-800 border rounded"
          activeClassName="text-violet-500"
        />
      </div>
    </div>
  );
};

export default BlogContent;
