'use client';

import React, { useState, useEffect } from 'react';
import { getJournals } from '@/api/hooks/getJournals.api';
import JournalCard from '@/components/other/JournalCard';
import ReactPaginate from 'react-paginate';

const JournalsRender: React.FC = () => {
  const [journals, setJournals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    // Fetch de las revistas
    getJournals()
      .then((data) => {
        setJournals(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Hemos tenido un error al cargar las revistas...');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-red-500">{error}</div>;
  }

  const journalsPerPage = 3;
  const offset = currentPage * journalsPerPage;
  const currentJournals = journals.slice(offset, offset + journalsPerPage);
  const pageCount = Math.ceil(journals.length / journalsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {currentJournals.map((journal) => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
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

export default JournalsRender;
