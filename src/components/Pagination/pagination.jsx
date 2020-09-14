import { useState } from 'react';

const usePagination = (initialState) => {
  const { itemsPerPage, data, startFrom } = initialState;
  const perPage = itemsPerPage ? itemsPerPage : 1;
  const pages = Math.ceil(data.length / perPage);
  const [currentPage, setCurrentPage] = useState(startFrom <= pages ? startFrom : 1);
  const [slicedData, setSlicedData] = useState([...data].slice((currentPage - 1) * perPage, currentPage * perPage));

  const prevPage = (e) => {
    e.preventDefault();
    setCurrentPage(val => val - 1 === 0 ? val : val - 1);
    if(currentPage !== 1) {
      setSlicedData([...data].slice((currentPage - 2) * perPage, (currentPage - 1) * perPage));
    }
  }

  const nextPage = (e) => {
    e.preventDefault();
    setCurrentPage(val => val === pages ? val : val + 1);
    if(currentPage !== pages) {
      setSlicedData([...data].slice(currentPage * perPage, (currentPage + 1) * perPage));
    }
  }

  return {
    slicedData,
    prevPage,
    nextPage
  }
}

export default usePagination;