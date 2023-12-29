import { useState } from 'react'

const usePagination = (listaDeItems) => {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 4
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = listaDeItems.reverse()?.slice(indexOfFirstItem, indexOfLastItem)

  const funcPaginate = (action) => {
    if (action === 'next') {
      setCurrentPage((prev) => {
        if (prev === Math.ceil(listaDeItems.length / itemsPerPage)) {
          return prev
        } else {
          return prev + 1
        }
        // prev + 1
      })
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return { currentItems, funcPaginate }
}

export default usePagination
